type TemplateCardProps = {
  name: string;
  format?: string;
  status?: string;
  thumbnail?: string;
};

export default function TemplateCard({ name, format, status = 'DRAFT', thumbnail }: TemplateCardProps) {
  return (
    <div className="template-card">
      {thumbnail && <img src={thumbnail} alt={name} />}
      <h3>{name}</h3>
      {format && <span>{format}</span>}
      <small>{status}</small>
      <button>Editar</button>
    </div>
  );
}
