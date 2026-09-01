export type AnchorPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';

export function applyAnchor(element: any, anchor: AnchorPosition, width:number, height:number) {
  return {
    ...element,
    anchor,
    canvasWidth: width,
    canvasHeight: height,
  };
}
