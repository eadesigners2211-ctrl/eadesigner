export function ImportPreview({ rows = [] }: { rows?: Record<string, unknown>[] }) {
  return (
    <div>
      <h2>Prévia de Importação</h2>
      <p>{rows.length} registros encontrados</p>
    </div>
  );
}
