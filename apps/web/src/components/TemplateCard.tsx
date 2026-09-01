type TemplateCardProps = {
  name: string;
  format?: string;
};

export default function TemplateCard({ name, format }: TemplateCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      {format && <span>{format}</span>}
    </div>
  );
}
