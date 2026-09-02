export type EditorElement = {
  id: string;
  type: string;
  locked?: boolean;
  hidden?: boolean;
  zIndex?: number;
};

export function duplicateElement(element: EditorElement) {
  return {
    ...element,
    id: `${element.id}-copy-${Date.now()}`,
    locked: false,
  };
}

export function toggleLock(element: EditorElement) {
  return { ...element, locked: !element.locked };
}

export function toggleVisibility(element: EditorElement) {
  return { ...element, hidden: !element.hidden };
}
