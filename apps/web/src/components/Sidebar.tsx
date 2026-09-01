const menuItems = [
  'Dashboard',
  'Projetos',
  'Assets',
  'Templates',
  'Gerações',
  'Histórico',
  'Configurações'
];

export default function Sidebar() {
  return (
    <aside>
      <h2>EA Creative Engine</h2>
      <nav>
        {menuItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </nav>
    </aside>
  );
}
