export type RenderCanvas = {
  width: number;
  height: number;
};

export type RenderElement = {
  id: string;
  type: 'text' | 'image' | 'shape' | 'background';
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  content?: string;
  src?: string;
};

export type RenderLayout = {
  canvas: RenderCanvas;
  elements: RenderElement[];
};

/**
 * Base renderer contract.
 * Converts layout_json into a render pipeline payload.
 */
export function prepareCanvasRender(layout: RenderLayout) {
  return {
    canvas: layout.canvas,
    layers: layout.elements.map((element) => ({
      id: element.id,
      type: element.type,
      properties: element,
    })),
  };
}
