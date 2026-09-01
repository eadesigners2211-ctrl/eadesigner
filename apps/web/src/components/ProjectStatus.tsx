type ProjectStatusProps = {
  status: string;
};

export default function ProjectStatus({ status }: ProjectStatusProps) {
  return <span>{status}</span>;
}
