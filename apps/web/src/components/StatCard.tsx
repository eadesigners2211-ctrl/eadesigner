interface Props {
  title: string;
  value: number;
  description?: string;
}

export default function StatCard({ title, value, description }: Props) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <strong>{value}</strong>
      {description && <p>{description}</p>}
    </div>
  );
}
