/* eslint-disable no-unused-vars */
import supabase from './supabase';

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}
export async function getUserData() {
  //   const { data: session } = await supabase.auth.getSession();
  //   if (!session) return null;
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  //   console.log(data);
  return data?.user;
}
