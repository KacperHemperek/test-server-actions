'use server';

import { revalidatePath } from 'next/cache';

/**
 *
 * @param {{title: string, body: string}} newTodo
 */
export async function addTodo(newTodo) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/todos`, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const error = await res.json();
    revalidatePath('/');

    return error;
  }

  revalidatePath('/');
  return null;
}

/**
 *
 * @param {Number} id
 */
export async function deleteTodo(id) {
  try {
    console.log(process.env.TEST_ENV);
    const res = await fetch(`${process.env.BACKEND_URL}/api/todos/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      const error = await res.json();

      return error;
    }

    return null;
  } catch (e) {
    console.error(e);
  } finally {
    revalidatePath('/');
  }
}
