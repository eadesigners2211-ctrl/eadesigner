import type { CampaignProgress, CampaignStatus } from './CampaignStatus';

export function CampaignDashboard({
  name,
  status,
  progress,
}: {
  name: string;
  status: CampaignStatus;
  progress: CampaignProgress;
}) {
  const percent = progress.total
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  return (
    <section>
      <h1>{name}</h1>
      <p>Status: {status}</p>
      <p>{progress.completed}/{progress.total} artes concluídas ({percent}%)</p>
      <p>Erros: {progress.failed}</p>
    </section>
  );
}
