"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useSupabase } from "./supabase-provider";
import { getCurrentUser } from "./supabase";

type UserContext = {
  user: User | null;
};

const Context = createContext<UserContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const currentUser = () => {
    getCurrentUser()
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      currentUser();
      console.log(user);
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);
console.log(user);

  return (
    <Context.Provider value={{ user }}>
      <>{children}</>
    </Context.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};