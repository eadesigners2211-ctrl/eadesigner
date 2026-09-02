export type EditorElementType = 'text' | 'image' | 'shape';

export interface EditorElement {
  id: string;
  type: EditorElementType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  value?: string;
  src?: string;
}

export function createTextElement(): EditorElement {
  return {
    id: crypto.randomUUID(),
    type: 'text',
    x: 100,
    y: 100,
    value: 'Novo texto',
  };
}

export function createImageElement(src: string): EditorElement {
  return {
    id: crypto.randomUUID(),
    type: 'image',
    x: 150,
    y: 150,
    width: 300,
    height: 300,
    src,
  };
}
