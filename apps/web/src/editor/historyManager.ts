export type EditorSnapshot<T> = T;

export interface HistoryState<T> {
  past: EditorSnapshot<T>[];
  present: EditorSnapshot<T>;
  future: EditorSnapshot<T>[];
}

const DEFAULT_HISTORY_LIMIT = 50;

export function createHistoryState<T>(initialState: T): HistoryState<T> {
  return {
    past: [],
    present: initialState,
    future: [],
  };
}

export function pushHistory<T>(
  history: HistoryState<T>,
  nextState: T,
  limit = DEFAULT_HISTORY_LIMIT
): HistoryState<T> {
  return {
    past: [...history.past, history.present].slice(-limit),
    present: nextState,
    future: [],
  };
}

export function undo<T>(history: HistoryState<T>): HistoryState<T> {
  const previous = history.past[history.past.length - 1];

  if (!previous) return history;

  return {
    past: history.past.slice(0, -1),
    present: previous,
    future: [history.present, ...history.future],
  };
}

export function redo<T>(history: HistoryState<T>): HistoryState<T> {
  const next = history.future[0];

  if (!next) return history;

  return {
    past: [...history.past, history.present],
    present: next,
    future: history.future.slice(1),
  };
}

export function canUndo<T>(history: HistoryState<T>): boolean {
  return history.past.length > 0;
}

export function canRedo<T>(history: HistoryState<T>): boolean {
  return history.future.length > 0;
}
