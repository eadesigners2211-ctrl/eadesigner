export interface TextRenderElement {
  text: string;
  x: number;
  y: number;
  fontSize?: number;
  fontFamily?: string;
}

export function renderTextElement(element: TextRenderElement) {
  return {
    type: 'text',
    content: element.text,
    position: {
      x: element.x,
      y: element.y,
    },
    style: {
      fontSize: element.fontSize ?? 16,
      fontFamily: element.fontFamily ?? 'Arial',
    },
  };
}
