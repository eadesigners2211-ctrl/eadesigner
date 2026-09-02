import { createImageElement, createShapeElement, createTextElement } from './elementActions';

export function Toolbar({ onAdd }: { onAdd: (element: ReturnType<typeof createTextElement>) => void }) {
  return (
    <nav>
      <button onClick={() => onAdd(createTextElement())}>Texto</button>
      <button onClick={() => onAdd(createImageElement(''))}>Imagem</button>
      <button onClick={() => onAdd(createShapeElement())}>Forma</button>
    </nav>
  );
}
