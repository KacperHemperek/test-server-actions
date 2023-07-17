import Todos from '@/app/todos';

export default async function Home() {
  const todos = await fetch('http://127.0.0.1:4000/api/todos').then((res) => {
    console.log('refetching data');
    return res.json();
  });

  return (
    <div className='max-w-sm mx-auto w-full gap-4 flex flex-col'>
      <Todos todos={todos} />
    </div>
  );
}
