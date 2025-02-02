import Task, { ITask } from '@/model/Task.model';

class TaskServices {
  async getAll(query: Record<string, unknown> = {}): Promise<ITask[]> {
    const queryParams: any = {};

    if (query.title) {
      queryParams.title = { $regex: query.title, $options: 'i' };
    }

    if (query.id) {
      queryParams._id = query.id;
    }

    if (query.status) {
      queryParams.status = query.status;
    }

    const sortBy: string = query.sortBy ? (query.sortBy as string) : 'index';
    const sortOrder = query.sortOrder === 'ascending' ? -1 : 1;

    const tasks = await Task.find(queryParams).sort({ [sortBy]: sortOrder });
    return tasks;
  }

  async getSingle(id: string): Promise<ITask> {
    const task = await Task.findById(id);
    if (!task) throw new Error('Task not found');
    return task;
  }

  async create(payload: ITask) {
    const lastTask = await Task.findOne().sort({ index: -1 });
    payload.index = lastTask ? lastTask.index + 1 : 1;

    const task = new Task(payload);
    await task.save();
    return task;
  }

  async update(id: string, payload: Partial<ITask & { id: string }>) {
    delete payload.index;

    const task = await Task.findOneAndUpdate({ index: id }, payload, {
      new: true,
      runValidators: true,
    });
    if (!task) throw new Error('Task not found');
    return task;
  }

  async delete(queryParams: Record<string, unknown>) {
    const query: Record<string, unknown> = {};

    if (queryParams.index) {
      query.index = queryParams.index;
    }

    if (queryParams._id) {
      query._id = queryParams._id;
    }

    if (queryParams.status) {
      query.status = queryParams.status;
    }

    const task = await Task.deleteMany(query);
    return task;
  }
}

const taskServices = new TaskServices();
export default taskServices;
