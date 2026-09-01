import { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import { useOrganization } from '../hooks/useOrganization';
import { getDashboardStats } from '../services/dashboardService';

export default function Dashboard() {
  const organization = useOrganization();
  const [stats, setStats] = useState({
    projects: 0,
    templates: 0,
    assets: 0,
    renders: 0,
  });

  useEffect(() => {
    const organizationId = organization?.organization_id;

    if (!organizationId) return;

    getDashboardStats(organizationId).then(setStats);
  }, [organization]);

  return (
    <main>
      <h1>E&A Personalizados</h1>
      <p>Dashboard conectado ao Supabase</p>

      <section>
        <StatCard title="Projetos" value={stats.projects} />
        <StatCard title="Templates" value={stats.templates} />
        <StatCard title="Assets" value={stats.assets} />
        <StatCard title="Renderizações" value={stats.renders} />
      </section>
    </main>
  );
}
