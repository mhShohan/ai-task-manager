import useTasks from '@/store/useTask';
import { baseUrl } from '@/utils/config';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Spinner from './icons/Spinner';
import SendIcon from './icons/SendIcon';

const TaskForm = () => {
  const { storeTasks, setError } = useTasks();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data: FieldValues) => {
    handleMutation.mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='rounded-md px-10 pb-10 pt-4 shadow-2xl flex gap-1 items-end'
      >
        <textarea
          placeholder='Enter your prompt...'
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
          {handleMutation.isPending ? <Spinner /> : <SendIcon />}
        </button>
      </form>
    </>
  );
};

export default TaskForm;
