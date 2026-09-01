export default function DashboardMenu() {
  const items = [
    'Templates',
    'Editor',
    'Assets',
    'Importar dados',
    'Render Queue',
  ];

  return (
    <nav className="space-y-2">
      {items.map((item) => (
        <button key={item} className="block w-full rounded-lg border p-3 text-left">
          {item}
        </button>
      ))}
    </nav>
  );
}
