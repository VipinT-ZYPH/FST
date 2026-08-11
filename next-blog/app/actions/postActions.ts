"use server";
import { revalidatePath } from 'next/cache';
import { postsDb } from '../lib/db';

export async function createPostAction(formData: FormData) {
  const title = (formData.get('title') as string) || '';
  const content = (formData.get('content') as string) || '';
  if (!title) return;
  postsDb.push({ id: Date.now().toString(), title, content });
  // Revalidate the demo page so fresh data is shown
  revalidatePath('/posts-demo');
}

// Accept either a raw id string (when called programmatically) or a FormData (from a <form action>)
export async function deletePostAction(payload: string | FormData) {
  let id: string | null = null;
  if (typeof payload === 'string') id = payload;
  else id = (payload.get('id') as string) || null;
  if (!id) return;
  const index = postsDb.findIndex((p) => p.id === id);
  if (index !== -1) postsDb.splice(index, 1);
  revalidatePath('/posts-demo');
}
