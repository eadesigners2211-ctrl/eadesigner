export interface CanvasRenderContext {
  width: number;
  height: number;
  elements: unknown[];
}

export async function renderCanvas(context: CanvasRenderContext) {
  return {
    status: 'ready',
    width: context.width,
    height: context.height,
    elements: context.elements.length,
  };
}
