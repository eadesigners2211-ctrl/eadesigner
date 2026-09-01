export type BulkCreativeJobStatus = 'draft' | 'queued' | 'processing' | 'completed' | 'error';

export interface BulkCampaign {
  id: string;
  name: string;
  templateId: string;
  formats: string[];
  totalItems: number;
  status: BulkCreativeJobStatus;
}

export interface BulkAssetItem {
  id: string;
  assetUrl: string;
  payload: Record<string, unknown>;
}
