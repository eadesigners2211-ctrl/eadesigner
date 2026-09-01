import { useEffect, useState } from "react";
import TemplateEditor from "../editor/TemplateEditor";

interface TemplateEditorLoaderProps {
  templateId: string;
  loadTemplate: (id: string) => Promise<any>;
}

export default function TemplateEditorLoader({
  templateId,
  loadTemplate,
}: TemplateEditorLoaderProps) {
  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await loadTemplate(templateId);
      setTemplate(data);
      setLoading(false);
    }

    load();
  }, [templateId, loadTemplate]);

  if (loading) {
    return <div>Carregando template...</div>;
  }

  if (!template) {
    return <div>Template não encontrado.</div>;
  }

  return <TemplateEditor template={template} />;
}
