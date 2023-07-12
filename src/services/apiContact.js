/* eslint-disable no-unused-vars */
import supabase from './supabase';
export async function getContact() {
  let { data, error } = await supabase.from('contact').select('*');

  if (error) {
    console.error(error);
    throw new Error('Contact not loaded from db');
  }

  return data;
}
export async function createContact(newcontact) {
  const { data, error } = await supabase
    .from('contact')
    .insert([newcontact])
    .select();
  if (error) {
    console.error(error);
    throw new Error('Contact Form  not Submitted');
  }

  return data;
}
