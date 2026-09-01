export default function Dashboard() {
  const cards = [
    { label: 'Templates ativos', value: '0' },
    { label: 'Artes geradas', value: '0' },
    { label: 'Jobs na fila', value: '0' },
    { label: 'Assets', value: '0' },
  ];

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">E&A Designer</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl border p-5">
            <p className="text-sm">{card.label}</p>
            <strong className="text-3xl">{card.value}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
