const stats = [
  { label: 'Templates ativos', value: '0' },
  { label: 'Artes geradas', value: '0' },
  { label: 'Jobs na fila', value: '0' },
  { label: 'Assets', value: '0' },
];

export function StatsCards() {
  return (
    <section className="grid grid-cols-4 gap-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-xl border p-5">
          <p className="text-sm">{item.label}</p>
          <strong className="text-3xl">{item.value}</strong>
        </div>
      ))}
    </section>
  );
}
