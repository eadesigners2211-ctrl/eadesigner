import type { ProductionRenderJob } from './renderWorkerTypes';

export function getNextPendingJob(jobs: ProductionRenderJob[]) {
  return jobs.find((job) => job.status === 'pending') ?? null;
}

export function markProcessing(job: ProductionRenderJob) {
  return {
    ...job,
    status: 'processing' as const,
  };
}

export function markCompleted(job: ProductionRenderJob, outputUrl: string) {
  return {
    ...job,
    status: 'completed' as const,
    outputUrl,
  };
}

export function markFailed(job: ProductionRenderJob, error: string) {
  return {
    ...job,
    status: 'failed' as const,
    error,
  };
}
