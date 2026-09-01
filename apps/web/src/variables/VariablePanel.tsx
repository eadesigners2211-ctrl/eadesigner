export type VariablePanelItem = {
  name: string;
  type: 'text' | 'image' | 'number' | 'currency';
};

export function VariablePanel({ variables = [] }: { variables?: VariablePanelItem[] }) {
  return (
    <aside className="variable-panel">
      <h3>Variáveis do Template</h3>
      {variables.length === 0 ? (
        <p>Nenhuma variável encontrada.</p>
      ) : (
        variables.map((variable) => (
          <div key={variable.name} className="variable-item">
            <strong>{`{{${variable.name}}}`}</strong>
            <span>{variable.type}</span>
          </div>
        ))
      )}
    </aside>
  );
}
