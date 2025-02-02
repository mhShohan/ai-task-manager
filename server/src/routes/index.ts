import { Router } from 'express';
import taskRoutes from './task.routes';
import assistantAI from '@/api/AssistantAI';
import asyncHandler from '@/lib/asyncHandler';

const router = Router();

router.use('/tasks', taskRoutes);

router.post(
  '/assistant',
  asyncHandler(async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
      res.status(400).json({
        message: 'Prompt is required!',
      });
    }

    const data = await assistantAI.generate(prompt);

    res.status(200).json({
      data,
    });
  })
);

export default router;
