'use client';

import useTasks, { ITask } from '@/store/useTask';
import { baseUrl } from '@/utils/config';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import TaskTable from './TaskTable';
import TaskForm from './TaskForm';

const TaskManager = () => {
  const { storeTasks, error } = useTasks();

  const { data, isSuccess } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await axios.get(baseUrl + '/tasks');

      return res.data.data;
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
        <h1 className='mt-2 text-center text-3xl font-semibold'>AI Task Manager</h1>
        <TaskForm />
      </div>
      {error ? (
        <div className='p-4 w-[600px] mx-auto mt-6'>
          <h1 className='text-2xl text-center bg-red-200 p-2 rounded-md'>
            No data found. Provide related prompt...
          </h1>
        </div>
      ) : (
        <TaskTable />
      )}
    </>
  );
};

export default TaskManager;
