export interface ElementProperties {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  value?: string;
}

export function PropertiesPanel({ properties }: { properties?: ElementProperties }) {
  return (
    <aside>
      <h3>Propriedades</h3>
      <div>
        X: {properties?.x ?? 0}
      </div>
      <div>
        Y: {properties?.y ?? 0}
      </div>
      <div>
        Tamanho: {properties?.width ?? 0} x {properties?.height ?? 0}
      </div>
      <div>
        Fonte: {properties?.fontSize ?? 0}
      </div>
      <div>
        Valor: {properties?.value ?? ''}
      </div>
    </aside>
  );
}
