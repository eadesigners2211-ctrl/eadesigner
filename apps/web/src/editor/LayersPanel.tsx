export function LayersPanel({ layers = [] }: { layers?: any[] }) {
  return (
    <aside>
      <h3>Camadas</h3>
      {layers.length === 0 ? (
        <p>Nenhuma camada</p>
      ) : (
        layers.map((layer) => (
          <div key={layer.id}>{layer.name || layer.type}</div>
        ))
      )}
    </aside>
  );
}
