import type { EditorState } from './editorState';

export function Canvas({ state }: { state: EditorState }) {
  return (
    <div>
      Canvas {state.canvas.width}x{state.canvas.height}
      <div>{state.elements.length} elementos</div>
    </div>
  );
}
