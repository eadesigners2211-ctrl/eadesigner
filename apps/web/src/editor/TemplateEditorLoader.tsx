import React, { useEffect, useState } from 'react';
import { templateManagerService } from '@/templates/templateManagerService';
import TemplateEditor from './TemplateEditor';

interface Props {
  templateId: string;
}

export default function TemplateEditorLoader({ templateId }: Props) {
  const [layout, setLayout] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTemplate() {
      setLoading(true);
      const template = await templateManagerService.getTemplateById(templateId);

      if (template) {
        setLayout(template.layout_json);
      }

      setLoading(false);
    }

    loadTemplate();
  }, [templateId]);

  if (loading) {
    return <div>Carregando template...</div>;
  }

  if (!layout) {
    return <div>Template não encontrado.</div>;
  }

  return <TemplateEditor initialLayout={layout} />;
}
