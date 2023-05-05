'use client';

import { useRouter } from "next/navigation";
import { useAuth } from "../Supabase/auth-provider";

const DiveInBtn = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if(user) {
      router.push("/movies");
    } else {
      router.push("/login");
    }
  }

  return (
    <button className="bg-blue-700 text-white mt-4 py-2 px-8 rounded-2xl font-bold shadow hover:bg-blue-900" onClick={handleClick}>
      Dive In
    </button>
  )
}

export default DiveInBtn;