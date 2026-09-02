type TemplateCardProps = {
  name: string;
  format: string;
};

export function TemplateCard({ name, format }: TemplateCardProps) {
  return (
    <div className="rounded-xl border p-5 space-y-2">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm">Formato: {format}</p>
      <button className="border rounded-lg px-3 py-1">Editar</button>
    </div>
  );
}
