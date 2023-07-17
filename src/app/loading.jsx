import React from 'react';

export default function Loading() {
  return (
    <div className='min-h-screen flex bg-stone-900 text-white p-24'>
      <div className='max-w-sm mx-auto w-full gap-4 flex flex-col'>
        <form action='' className='space-y-8'>
          <div
            type='submit'
            className='h-14 bg-stone-800 animate-pulse rounded'
          ></div>
          <div
            type='submit'
            className='h-14 bg-stone-800 animate-pulse rounded'
          ></div>
        </form>
        <div className='h-[18px] my-[2px] w-full rounded bg-stone-800 animate-pulse' />
        <div className='h-[18px] my-[2px] w-full rounded bg-stone-800 animate-pulse' />
        <div className='h-[18px] my-[2px] w-full rounded bg-stone-800 animate-pulse' />
      </div>
    </div>
  );
}
