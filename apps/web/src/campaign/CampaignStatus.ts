export type CampaignStatus =
  | 'draft'
  | 'queued'
  | 'processing'
  | 'completed'
  | 'failed';

export interface CampaignProgress {
  total: number;
  completed: number;
  failed: number;
}
