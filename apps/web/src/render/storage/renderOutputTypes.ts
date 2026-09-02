export interface RenderOutput {
  id?: string;
  organizationId: string;
  renderJobId: string;
  fileUrl: string;
  format: 'png' | 'jpg';
  width: number;
  height: number;
  createdAt?: string;
}

export type RenderBucket = 'render-output';
