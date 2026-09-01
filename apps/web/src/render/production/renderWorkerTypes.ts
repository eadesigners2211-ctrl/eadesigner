export type RenderJobStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed';

export interface ProductionRenderJob {
  id: string;
  campaignId: string;
  templateId: string;
  payload: Record<string, unknown>;
  format: string;
  status: RenderJobStatus;
  outputUrl?: string;
  error?: string;
}
