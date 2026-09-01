export function VariableField({ name, type }: { name: string; type: string }) {
  return (
    <div className="variable-field">
      <div>{`{{${name}}}`}</div>
      <small>Tipo: {type}</small>
    </div>
  );
}
