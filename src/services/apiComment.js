import supabase from './supabase';

export async function getComments() {
  let { data, error } = await supabase.from('Bookings').select('*');

  if (error) {
    console.error(error);
    throw new Error('comments not loading from db');
  }

  return data;
}
export async function createComment(newComment) {
  const { data, error } = await supabase
    .from('Bookings')
    .insert([newComment])
    .select();
  if (error) {
    console.error(error);
    throw new Error('Comment not created to db');
  }

  return data;
}
