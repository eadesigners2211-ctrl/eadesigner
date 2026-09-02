import type { EditorElement } from './editorState';

export function updateElementPosition(
  element: EditorElement,
  x: number,
  y: number
): EditorElement {
  return {
    ...element,
    x,
    y,
  };
}

export function selectElement(id: string): string {
  return id;
}
