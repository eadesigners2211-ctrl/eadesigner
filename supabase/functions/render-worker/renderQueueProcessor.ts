export type RenderJob = {
  id: string;
  template_id: string;
  payload: Record<string, unknown>;
  status: 'pending' | 'processing' | 'completed' | 'error';
};

export function processRenderJob(job: RenderJob) {
  return {
    ...job,
    status: 'processing',
    started_at: new Date().toISOString()
  };
}
