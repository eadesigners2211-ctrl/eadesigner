import type { EditorState } from './editorState';
import { selectElement } from './canvasInteraction';

export function Canvas({
  state,
  onSelect,
}: {
  state: EditorState;
  onSelect?: (id: string) => void;
}) {
  return (
    <div>
      Canvas {state.canvas.width}x{state.canvas.height}
      {state.elements.map((element) => (
        <div
          key={element.id}
          onClick={() => onSelect?.(selectElement(element.id))}
        >
          {element.type}: {element.content ?? element.id}
        </div>
      ))}
    </div>
  );
}
