export type CanvasSize = {
  width: number;
  height: number;
};

export type ElementType = 'text' | 'image' | 'shape' | 'background';

export type EditorElement = {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  visible?: boolean;
  locked?: boolean;
  content?: string;
  src?: string;
};

export type LayoutDocument = {
  canvas: CanvasSize;
  elements: EditorElement[];
};
