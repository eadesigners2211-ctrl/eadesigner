import { useEffect, useState } from 'react';
import { getTemplates } from '../templates/templateService';

export default function Templates() {
  const [templates, setTemplates] = useState<any[]>([]);

  useEffect(() => {
    getTemplates().then((data) => setTemplates(data || []));
  }, []);

  return (
    <main>
      <h1>Templates</h1>
      <p>Biblioteca de modelos da E&A</p>

      {templates.length === 0 ? (
        <p>Nenhum template cadastrado.</p>
      ) : (
        templates.map((template) => (
          <div key={template.id}>
            {template.name}
          </div>
        ))
      )}
    </main>
  );
}
