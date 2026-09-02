export type RenderStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed';

export interface RenderJob {
  id: string;
  templateId: string;
  data: Record<string, unknown>;
  format: string;
  status: RenderStatus;
  progress: number;
  outputUrl?: string;
  error?: string;
}

export interface RenderBatch {
  id: string;
  templateId: string;
  jobs: RenderJob[];
  total: number;
  completed: number;
}
