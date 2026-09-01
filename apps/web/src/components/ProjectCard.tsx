type Props = {
  name: string;
  status?: string;
};

export default function ProjectCard({ name, status }: Props) {
  return (
    <div>
      <h3>{name}</h3>
      <span>{status ?? 'draft'}</span>
    </div>
  );
}
