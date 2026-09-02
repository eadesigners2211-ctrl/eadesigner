import { getNextPendingJob, updateRenderJobStatus } from '../renderQueue';

export async function runRenderWorker() {
  const job = await getNextPendingJob();

  if (!job) return null;

  await updateRenderJobStatus(job.id, 'processing', 0);

  try {
    const result = await processRenderJob(job);

    await updateRenderJobStatus(job.id, 'completed', 100);

    return result;
  } catch (error) {
    await updateRenderJobStatus(job.id, 'failed', 0);
    throw error;
  }
}

async function processRenderJob(job: unknown) {
  return {
    job,
    status: 'processed'
  };
}
