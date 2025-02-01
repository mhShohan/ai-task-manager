import { create } from 'zustand';

export interface ITask {
  _id: string;
  index: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

interface TaskState {
  tasks: ITask[];
  error: boolean;
  storeTasks: (tasks: ITask[]) => void;
}

const useTasks = create<TaskState>()((set) => ({
  tasks: [],
  error: false,
  storeTasks: (tasks) => set(() => ({ tasks, error: false })),
}));

export default useTasks;
