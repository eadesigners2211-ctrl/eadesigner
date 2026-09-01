export interface ElementProperties {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  value?: string;
}

export function PropertiesPanel({ properties }: { properties?: ElementProperties }) {
  return {
    title: 'Properties',
    properties: properties ?? {},
  };
}
