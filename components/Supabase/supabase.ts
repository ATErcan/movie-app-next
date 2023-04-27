import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!);

export default supabase;

type signUpFn = (
  userInfo: UserInfo,
  setLoading: (loading: boolean) => void
) => void;

type signOutFn = (setLoading: (loading: boolean) => void) => void;

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

export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  return user;
}

export const getUserInfo = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const profile = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user?.id);
  return profile;
}

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return data;
}