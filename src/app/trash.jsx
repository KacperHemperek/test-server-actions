import { deleteTodo } from '@/app/todo.actions';
import React, { useTransition } from 'react';

export function DeleteTodo({ id }) {
  const [isTransitioning, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => deleteTodo(id))}
      className='flex items-center justify-center text-stone-500 hover:text-red-500 cursor-pointer transition-colors'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='lucide lucide-trash-2 w-5 h-5'
      >
        <path d='M3 6h18' />
        <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
        <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
        <line x1='10' x2='10' y1='11' y2='17' />
        <line x1='14' x2='14' y1='11' y2='17' />
      </svg>
    </button>
  );
}
