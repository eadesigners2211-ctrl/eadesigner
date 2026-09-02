import { StatsCards } from './StatsCards';
import { RecentTemplates } from './RecentTemplates';
import { RecentRenders } from './RecentRenders';

export default function Dashboard() {
  return (
    <main className="p-8 space-y-8">
      <section>
        <h1 className="text-3xl font-bold">E&A Designer</h1>
        <p className="text-sm">Painel de criação e automação de artes.</p>
      </section>

      <StatsCards />
      <RecentTemplates />
      <RecentRenders />
    </main>
  );
}
