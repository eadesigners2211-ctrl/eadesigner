export interface CampaignJobSummary {
  id: string;
  productName: string;
  format: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
}

export function groupCampaignJobs(jobs: CampaignJobSummary[]) {
  return {
    total: jobs.length,
    completed: jobs.filter((job) => job.status === 'completed').length,
    pending: jobs.filter((job) => job.status === 'pending').length,
    errors: jobs.filter((job) => job.status === 'error').length,
  };
}
