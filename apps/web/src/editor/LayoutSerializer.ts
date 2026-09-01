export function serializeLayout(canvas: any, elements: any[]) {
  return {
    canvas,
    elements: elements.map(element => ({
      id: element.id,
      type: element.type,
      x: element.x || 0,
      y: element.y || 0,
      value: element.value,
      src: element.src,
      asset_id: element.asset_id,
    })),
  };
}
