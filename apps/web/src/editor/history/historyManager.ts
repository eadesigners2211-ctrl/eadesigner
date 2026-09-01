export type HistoryItem<T> = T;

export class HistoryManager<T> {
  private undoStack: HistoryItem<T>[] = [];
  private redoStack: HistoryItem<T>[] = [];

  push(state: T) {
    this.undoStack.push(state);
    this.redoStack = [];
  }

  undo(): T | undefined {
    const item = this.undoStack.pop();
    if (item) this.redoStack.push(item);
    return item;
  }

  redo(): T | undefined {
    const item = this.redoStack.pop();
    if (item) this.undoStack.push(item);
    return item;
  }
}
