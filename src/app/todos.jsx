'use client';
import AddTodoForm from '@/app/add-todo-form';
import { addTodo } from '@/app/todo.actions';
import { DeleteTodo } from '@/app/trash';
import React, { useId, useRef, useState } from 'react';

import { experimental_useOptimistic as useOptimistic } from 'react';

export default function Todos({ todos }) {
  const id = useId();
  const [optMessages, updateOptMessages] = useOptimistic(
    todos,
    (state, newTodo) => [
      { id, title: newTodo.title, done: false, body: newTodo.body },
      ...state,
    ]
  );

  const [errors, setErrors] = useState(null);

  const formRef = useRef(null);

  return (
    <>
      <form
        ref={formRef}
        action={async (formData) => {
          const newTodo = {
            title: formData.get('title'),
            body: formData.get('body'),
          };
          // updateOptMessages(newTodo);
          const resError = (await addTodo(newTodo))?.errors;
          setErrors(resError);
          formRef.current?.reset();
        }}
        className='space-y-4'
      >
        <AddTodoForm errors={errors} />
      </form>
      {optMessages.map((todo) => (
        <div
          key={todo.title + todo.ID}
          className='flex items-center justify-between'
        >
          <p>
            {todo.title} {todo.ID}
          </p>
          <DeleteTodo id={todo.ID} />
        </div>
      ))}
    </>
  );
}
