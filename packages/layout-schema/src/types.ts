export type CanvasSize = {
  width: number;
  height: number;
};

export type LayoutElement = {
  id: string;
  type: 'text' | 'image' | 'shape';
  x: number;
  y: number;
  width?: number;
  height?: number;
  content?: string;
};

export type LayoutJSON = {
  canvas: CanvasSize;
  elements: LayoutElement[];
};
