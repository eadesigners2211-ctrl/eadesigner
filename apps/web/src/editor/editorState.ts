export type EditorElement = {
  id: string;
  type: 'text' | 'image' | 'shape';
  x: number;
  y: number;
  width?: number;
  height?: number;
  content?: string;
};

export type EditorState = {
  canvas: {
    width: number;
    height: number;
  };
  elements: EditorElement[];
};
