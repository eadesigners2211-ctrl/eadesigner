import { useEffect, useState } from 'react';
import { getDashboardStats } from '../services/dashboardService';

export function useDashboardStats(organizationId?: string) {
  const [stats, setStats] = useState({
    projects: 0,
    templates: 0,
    assets: 0,
    renders: 0
  });

  useEffect(() => {
    if (!organizationId) return;

    getDashboardStats(organizationId).then(setStats);
  }, [organizationId]);

  return stats;
}
