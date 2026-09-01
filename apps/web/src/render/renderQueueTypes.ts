export type RenderJobStatus = 'pending' | 'processing' | 'completed' | 'error';

export type RenderJob = {
  id?: string;
  template_id: string;
  payload: Record<string, unknown>;
  status: RenderJobStatus;
  output_url?: string;
  created_at?: string;
};

export function createRenderPayload(data: Record<string, unknown>) {
  return {
    payload: data,
    status: 'pending' as RenderJobStatus
  };
}
