import { useEffect, useState } from 'react';
import { getTemplates } from '../templates/templateService';
import TemplateCard from '../components/TemplateCard';

export default function Templates() {
  const [templates, setTemplates] = useState<any[]>([]);

  useEffect(() => {
    getTemplates().then((data) => setTemplates(data || []));
  }, []);

  return (
    <main>
      <h1>Templates</h1>
      <p>Biblioteca de modelos da E&A</p>

      <button>Novo Template</button>

      {templates.length === 0 ? (
        <p>Nenhum template cadastrado.</p>
      ) : (
        templates.map((template) => (
          <TemplateCard
            key={template.id}
            name={template.name}
            format={template.format}
          />
        ))
      )}
    </main>
  );
}
