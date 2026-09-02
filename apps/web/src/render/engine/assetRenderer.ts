export interface AssetRenderElement {
  src: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  opacity?: number;
}

export function renderAssetElement(element: AssetRenderElement) {
  return {
    type: 'image',
    source: element.src,
    position: {
      x: element.x,
      y: element.y,
    },
    size: {
      width: element.width ?? null,
      height: element.height ?? null,
    },
    opacity: element.opacity ?? 1,
  };
}
