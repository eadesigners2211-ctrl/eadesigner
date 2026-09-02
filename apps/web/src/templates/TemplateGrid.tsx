import { TemplateCard } from './TemplateCard';

export function TemplateGrid() {
  const templates = [
    { name: 'Exemplo Feed', format: '1080x1080' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {templates.map((template) => (
        <TemplateCard key={template.name} {...template} />
      ))}
    </div>
  );
}
