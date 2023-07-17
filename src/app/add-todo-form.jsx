import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function AddTodoForm({ errors }) {
  const { pending } = useFormStatus();

  return (
    <>
      <div className='relative'>
        <input
          type='text'
          name='title'
          placeholder="What's on your mind?"
          disabled={pending}
          className='w-full bg-stone-800 p-4 rounded focus-visible:outline  outline-teal-600 placeholder:text-stone-500 mb-5 disabled:opacity-70 transition-opacity'
        />
        {errors?.find(
          (error) => error?.FailedField.toLowerCase() === 'title'
        ) && (
          <span className='absolute bottom-0 left-0 text-red-500 text-xs'>
            this field is required
          </span>
        )}
      </div>
      <div className='relative'>
        <textarea
          placeholder='Tell us something more'
          rows={3}
          name='body'
          disabled={pending}
          className='w-full bg-stone-800 p-4 rounded focus-visible:outline  outline-teal-600 placeholder:text-stone-500 resize-none mb-5 disabled:opacity-70 transition-opacity'
        />
        {errors?.find(
          (error) => error?.FailedField.toLowerCase() === 'body'
        ) && (
          <span className='absolute bottom-0 left-0 text-red-500 text-xs'>
            this field is required
          </span>
        )}
      </div>
      <button
        disabled={pending}
        type='submit'
        className='w-full bg-teal-600 py-4 rounded disabled:bg-stone-600 transition-colors'
      >
        Add todo
      </button>
    </>
  );
}
