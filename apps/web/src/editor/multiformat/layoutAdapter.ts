import { CanvasFormat } from './formatTypes';

export type LayoutElement = {
  id: string;
  type: 'text' | 'image';
  x: number;
  y: number;
  width: number;
  height: number;
};

export function adaptElementToFormat(
  element: LayoutElement,
  source: CanvasFormat,
  target: CanvasFormat
): LayoutElement {
  const scaleX = target.width / source.width;
  const scaleY = target.height / source.height;

  return {
    ...element,
    x: Math.round(element.x * scaleX),
    y: Math.round(element.y * scaleY),
    width: Math.round(element.width * scaleX),
    height: Math.round(element.height * scaleY)
  };
}
