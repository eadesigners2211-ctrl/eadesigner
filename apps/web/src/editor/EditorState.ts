export type EditorSelection = string | null;

export interface EditorState {
  selectedElementId: EditorSelection;
  zoom: number;
  elements: unknown[];
}

export const initialEditorState: EditorState = {
  selectedElementId: null,
  zoom: 1,
  elements: [],
};

export function selectElement(id: string | null): Partial<EditorState> {
  return { selectedElementId: id };
}
