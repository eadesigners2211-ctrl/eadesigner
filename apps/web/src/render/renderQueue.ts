import type { RenderJob } from './renderTypes';

export function createRenderQueue(jobs: RenderJob[]) {
  return jobs.map((job) => ({
    ...job,
    status: 'pending' as const,
    progress: 0,
  }));
}

export function getNextPendingJob(queue: RenderJob[]) {
  return queue.find((job) => job.status === 'pending');
}

export function updateJobProgress(
  job: RenderJob,
  progress: number,
) {
  return {
    ...job,
    progress,
    status: progress >= 100 ? 'completed' : 'processing',
  };
}
