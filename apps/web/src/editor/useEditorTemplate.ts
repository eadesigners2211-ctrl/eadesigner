import { useEffect, useState } from 'react';
import { loadEditorTemplate } from './editorSupabaseIntegration';

export function useEditorTemplate(templateId?: string) {
  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!templateId) return;

    loadEditorTemplate(templateId)
      .then(setTemplate)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [templateId]);

  return {
    template,
    loading,
    error,
  };
}
