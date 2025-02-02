import { Document, model, Schema } from 'mongoose';

export interface ITask extends Document {
  index: number;
  title: string;
  description: string;
  status: 'pending' | 'complete' | 'declined';
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    index: { type: Number, required: true },
    description: { type: String },
    status: { type: String, required: true, enum: ['pending', 'complete', 'declined'] },
  },
  { timestamps: true }
);

// taskSchema.pre<ITask>('save', async function (next) {
//   if (this.isNew) {
//     const lastTask = await Task.findOne().sort({ index: -1 }); // Get last task by index
//     this.index = lastTask ? lastTask.index + 1 : 1; // Increment or start from 1
//   }
//   next();
// });

const Task = model<ITask>('Task', taskSchema);
export default Task;
