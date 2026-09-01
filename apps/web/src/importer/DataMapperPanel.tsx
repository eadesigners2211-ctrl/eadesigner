export function DataMapperPanel({ fields = [] }: { fields?: string[] }) {
  return (
    <div>
      <h2>Mapeamento de Campos</h2>
      {fields.map((field) => (
        <div key={field}>{field} → variável do template</div>
      ))}
    </div>
  );
}
