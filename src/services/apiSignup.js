/* eslint-disable no-unused-vars */
import supabase from './supabase';
export async function getSignUp() {
  let { data, error } = await supabase.from('signup').select('*');

  if (error) {
    console.error(error);
    throw new Error('Signup not loaded from db');
  }

  return data;
}
export async function signUpUser(newcontact) {
  const { data, error } = await supabase
    .from('signup')
    .insert([newcontact])
    .select();
  if (error) {
    console.error(error);
    throw new Error('SignUp Form  not Submitted');
  }

  return data;
}
