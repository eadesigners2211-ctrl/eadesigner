import type { EditorElement } from './editorState';

export function resizeElement(
  element: EditorElement,
  width: number,
  height: number,
): EditorElement {
  return {
    ...element,
    width,
    height,
  };
}

export function moveElement(
  element: EditorElement,
  x: number,
  y: number,
): EditorElement {
  return {
    ...element,
    x,
    y,
  };
}
