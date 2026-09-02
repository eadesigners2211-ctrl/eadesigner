export type EditorElement = {
  id: string;
  zIndex?: number;
  hidden?: boolean;
  locked?: boolean;
};

export function bringForward<T extends EditorElement>(elements: T[], id: string) {
  const index = elements.findIndex((element) => element.id === id);
  if (index < 0 || index === elements.length - 1) return elements;

  const next = [...elements];
  const temp = next[index];
  next[index] = next[index + 1];
  next[index + 1] = temp;
  return next;
}

export function sendBackward<T extends EditorElement>(elements: T[], id: string) {
  const index = elements.findIndex((element) => element.id === id);
  if (index <= 0) return elements;

  const next = [...elements];
  const temp = next[index];
  next[index] = next[index - 1];
  next[index - 1] = temp;
  return next;
}

export function bringToFront<T extends EditorElement>(elements: T[], id: string) {
  const selected = elements.find((element) => element.id === id);
  if (!selected) return elements;

  return [...elements.filter((element) => element.id !== id), selected];
}

export function sendToBack<T extends EditorElement>(elements: T[], id: string) {
  const selected = elements.find((element) => element.id === id);
  if (!selected) return elements;

  return [selected, ...elements.filter((element) => element.id !== id)];
}
