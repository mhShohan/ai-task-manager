'use client';

import useTasks, { ITask } from '@/store/useTask';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const demo_tasks: ITask[] = [
  {
    _id: 'asdfasdafsdf',
    index: 1,
    title: 'Early rising',
    description: 'asdfasdf',
    status: 'pending',
    createdAt: '2025-02-01T10:41:13.280Z',
  },
  {
    _id: 'asdfasdafsdf',
    index: 2,
    title: 'Early rising',
    description: 'asdfasdf',
    status: 'complete',
    createdAt: '2025-02-01T10:41:13.280Z',
  },
  {
    _id: 'asdfasdafsdf',
    index: 3,
    title: 'Early rising',
    description: 'asdfasdf',
    status: 'declined',
    createdAt: '2025-02-01T10:41:13.280Z',
  },
];

const TaskManager = () => {
  const { storeTasks, error } = useTasks();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  useEffect(() => {
    storeTasks(demo_tasks as ITask[]);
  }, []);

  return (
    <>
      <div className='w-[600px] mx-auto'>
        <h1 className='my-5 text-center text-3xl font-semibold'>Task Manager (AI agent)</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='rounded-md p-10 shadow-2xl flex gap-1 items-end'
        >
          <textarea
            placeholder='Add your prompt...'
            {...register('prompt', { required: true })}
            className={`w-full outline-none border rounded-md py-2 px-4 ${
              errors['prompt'] ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={3}
          />
          <button type='submit' className='mt-2 cursor-pointer bg-green-600 p-2 rounded text-xl'>
            <Icon />
          </button>
        </form>
      </div>
      {error ? (
        <div className='p-4 w-[600px] mx-auto mt-6'>
          <h1 className='text-2xl text-center bg-red-200 p-2 rounded-md'>
            No data found. Provide related prompt...
          </h1>
        </div>
      ) : (
        <TableComponent />
      )}
    </>
  );
};

export default TaskManager;

const Icon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='#fff'
      viewBox='0 0 256 256'
    >
      <path d='M237.9,200.1,141.85,32.18a16,16,0,0,0-27.89,0l-95.89,168a16,16,0,0,0,19.26,22.92L128,192.45l90.67,30.63A16.22,16.22,0,0,0,224,224a16,16,0,0,0,13.86-23.9Zm-14.05,7.84L136,178.26V120a8,8,0,0,0-16,0v58.26L32.16,207.94,32,208,127.86,40,224,208Z'></path>
    </svg>
  );
};

const TableComponent = () => {
  const { tasks } = useTasks();

  return (
    <div className='p-4 w-[80%] mx-auto mt-6'>
      <table className='w-full border border-gray-300 shadow-lg rounded-lg'>
        <thead>
          <tr className='bg-gray-200 text-left'>
            <th className='p-2 border w-[5%]'>Index</th>
            <th className='p-2 border w-[25%]'>Title</th>
            <th className='p-2 border flex-grow'>Description</th>
            <th className='p-2 border w-[10%] text-center'>Status</th>
            <th className='p-2 border w-[15%] text-center'>Created At</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((item, index) => (
            <tr key={index} className='hover:bg-gray-100'>
              <td className='p-2 border text-center'>{item.index}</td>
              <td className='p-2 border'>{item.title}</td>
              <td className='p-2 border text-sm'>{item.description}</td>
              <td className='p-2 border uppercase text-center'>
                <span
                  className={`rounded-full px-4 text-sm font-semibold text-white py-[2px] ${
                    item.status === 'pending' && 'bg-amber-600'
                  } ${item.status === 'complete' && 'bg-green-600'} ${
                    item.status === 'declined' && 'bg-red-600'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className='p-2 border text-sm text-center'>{formatDate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function formatDate(isoString: string) {
  const date = new Date(isoString);

  // Extract hours, minutes, seconds
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format date part
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  return `${hours}:${String(minutes).padStart(2, '0')} ${ampm} - ${day} ${month}, ${year}`;
}
