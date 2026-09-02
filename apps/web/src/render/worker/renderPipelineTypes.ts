export interface RenderPipelineResult {
  jobId: string;
  status: 'completed' | 'failed';
  output?: {
    format: string;
    width: number;
    height: number;
  };
  error?: string;
}
