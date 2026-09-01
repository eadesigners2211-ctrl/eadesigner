import type { BulkCampaign, BulkAssetItem } from './bulkCreativeTypes';

export function createBulkJobs(campaign: BulkCampaign, items: BulkAssetItem[]) {
  return items.flatMap((item) =>
    campaign.formats.map((format) => ({
      templateId: campaign.templateId,
      assetId: item.id,
      format,
      payload: item.payload,
      status: 'queued',
    }))
  );
}
