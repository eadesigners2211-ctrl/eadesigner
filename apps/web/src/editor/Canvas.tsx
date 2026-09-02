import type { EditorState } from './editorState';
import { selectElement } from './canvasInteraction';
import { moveElement, resizeElement } from './resizeHandlers';

export function Canvas({
  state,
  onSelect,
  onChange,
}: {
  state: EditorState;
  onSelect?: (id: string) => void;
  onChange?: (id: string, updates: { x?: number; y?: number; width?: number; height?: number }) => void;
}) {
  return (
    <div>
      Canvas {state.canvas.width}x{state.canvas.height}
      {state.elements.map((element) => (
        <div
          key={element.id}
          draggable
          onDragEnd={(event) => {
            onChange?.(
              element.id,
              moveElement(element, event.clientX, event.clientY),
            );
          }}
          onClick={() => onSelect?.(selectElement(element.id))}
        >
          {element.type}: {element.content ?? element.id}
          <button
            onClick={() =>
              onChange?.(
                element.id,
                resizeElement(
                  element,
                  (element.width ?? 100) + 10,
                  (element.height ?? 100) + 10,
                ),
              )
            }
          >
            Resize
          </button>
        </div>
      ))}
    </div>
  );
}
