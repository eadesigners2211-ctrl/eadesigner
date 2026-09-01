import type { RenderJob } from '../../../supabase/functions/render-worker/index';

export function prepareRender(job: RenderJob) {
  return {
    ...job,
    status: 'processing'
  };
}

export function completeRender(job: RenderJob, outputUrl: string) {
  return {
    ...job,
    status: 'completed',
    outputUrl
  };
}
