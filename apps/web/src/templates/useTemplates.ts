import { useEffect, useState } from 'react';
import { getTemplates, TemplateRecord } from './templatesService';

export function useTemplates(organizationId?: string) {
  const [templates, setTemplates] = useState<TemplateRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getTemplates(organizationId)
      .then(setTemplates)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [organizationId]);

  return {
    templates,
    loading,
    error,
  };
}
