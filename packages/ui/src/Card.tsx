type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-xl border p-4">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
