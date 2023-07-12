/* eslint-disable no-unused-vars */
import supabase from './supabase';

export async function getPosts() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('post not loaded from db');
  }

  return data;
}
export async function createPost(newPost) {
  const { data, error } = await supabase
    .from('cabins')
    .insert([newPost])
    .select();
  if (error) {
    console.error(error);
    throw new Error('post not created to db');
  }

  return data;
}
// let { data: cabins, error } = await supabase.from('cabins').select('*');
