export type ShortcutAction =
  | "duplicate"
  | "delete"
  | "undo"
  | "redo"
  | "copy"
  | "paste";

export interface ShortcutContext {
  selectedElementId?: string | null;
  execute: (action: ShortcutAction) => void;
}

export function handleKeyboardShortcut(
  event: KeyboardEvent,
  context: ShortcutContext
) {
  const key = event.key.toLowerCase();

  if ((event.ctrlKey || event.metaKey) && key === "c") {
    event.preventDefault();
    context.execute("copy");
    return;
  }

  if ((event.ctrlKey || event.metaKey) && key === "v") {
    event.preventDefault();
    context.execute("paste");
    return;
  }

  if ((event.ctrlKey || event.metaKey) && key === "d") {
    event.preventDefault();
    context.execute("duplicate");
    return;
  }

  if ((event.ctrlKey || event.metaKey) && key === "z") {
    event.preventDefault();
    if (event.shiftKey) {
      context.execute("redo");
    } else {
      context.execute("undo");
    }
    return;
  }

  if (key === "delete" || key === "backspace") {
    event.preventDefault();
    context.execute("delete");
  }
}
