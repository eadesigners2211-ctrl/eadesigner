import type { EditorState } from './editorState';

export function Canvas({ state }: { state: EditorState }) {
  return (
    <div>
      Canvas {state.canvas.width}x{state.canvas.height}
      {state.elements.map((element) => (
        <div key={element.id}>
          {element.type}: {element.content ?? element.id}
        </div>
      ))}
    </div>
  );
}
