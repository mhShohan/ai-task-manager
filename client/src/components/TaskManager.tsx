'use client';

import useTasks, { ITask } from '@/store/useTask';
import { baseUrl } from '@/utils/config';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const TaskManager = () => {
  const { storeTasks, error, setError } = useTasks();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    handleMutation.mutate(data);
  };

  const { data, isSuccess } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await axios.get(baseUrl + '/tasks');

      return res.data.data;
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMutation = useMutation<any, any, any>({
    mutationFn: async (payload) => {
      const res = await axios.post(baseUrl + '/assistant', payload);

      return res.data.data;
    },
    onSuccess(data) {
      storeTasks(data);
      setError(false);
      reset();
    },
    onError() {
      setError(true);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      storeTasks(data as ITask[]);
    }
  }, [isSuccess]);

  return (
    <>
      <div className='w-[600px] mx-auto'>
        <h1 className='mt-2 text-center text-3xl font-semibold'>Task Manager (AI agent)</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='rounded-md px-10 pb-10 pt-4 shadow-2xl flex gap-1 items-end'
        >
          <textarea
            placeholder='Add your prompt...'
            {...register('prompt', { required: true })}
            className={`w-full outline-none border rounded-md py-2 px-4 ${
              errors['prompt'] ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={3}
          />
          <button
            type='submit'
            disabled={handleMutation.isPending}
            className='mt-2 cursor-pointer bg-green-600 p-2 rounded text-xl disabled:bg-slate-400'
          >
            {handleMutation.isPending ? <Spinner /> : <Icon />}
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

const Spinner = () => {
  return (
    <div className='w-[32px] h-[32px] animate-spin'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        fill='#000'
        viewBox='0 0 256 256'
      >
        <path d='M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z'></path>
      </svg>
    </div>
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
            <th className='p-2 border w-[20%] text-center'>Created At</th>
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
