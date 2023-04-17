import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!);

export default supabase;

type userInfo = {
  email: string;
  password: string;
}

type signUpFn = (
  userInfo: userInfo,
  setLoading: (loading: boolean) => void
) => void;

type signOutFn = (setLoading: (loading: boolean) => void) => void;

export const signUpWithEmail: signUpFn = async (userInfo, setLoading) => {
  setLoading(true);
  const { error } = await supabase.auth.signUp({
    email: userInfo.email,
    password: userInfo.password,
  });

  if (error) window.alert(error.message);
  setLoading(false);
};

export const signIn: signUpFn = async (userInfo, setLoading) => {
  setLoading(true);
  const { error } = await supabase.auth.signInWithPassword({
    email: "example@email.com",
    password: "example-password",
  });

  if (error) window.alert(error.message);
  setLoading(false);
}

export const signOut: signOutFn = async (setLoading) => {
  setLoading(true);
  const { error } = await supabase.auth.signOut();
  if(error) window.alert(error.message);
  setLoading(false);
};