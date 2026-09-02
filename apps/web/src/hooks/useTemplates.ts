import { useEffect, useState } from 'react';
import { getTemplates } from '@/templates/templateManagerService';

export function useTemplates(organizationId?: string) {
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!organizationId) return;

    setLoading(true);
    getTemplates(organizationId)
      .then(setTemplates)
      .finally(() => setLoading(false));
  }, [organizationId]);

  return { templates, loading };
}
