export type SelectionState = {
  selectedId: string | null;
};

export function createSelectionState(): SelectionState {
  return {
    selectedId: null,
  };
}

export function selectElement(id: string): SelectionState {
  return {
    selectedId: id,
  };
}
