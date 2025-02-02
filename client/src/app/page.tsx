'use client';

import TaskManager from '@/components/TaskManager';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <TaskManager />
      </QueryClientProvider>
    </main>
  );
}
