import { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';

export function useProjects(organizationId?: string) {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!organizationId) return;

    getProjects(organizationId)
      .then(setProjects)
      .finally(() => setLoading(false));
  }, [organizationId]);

  return { projects, loading };
}
