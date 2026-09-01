import React from 'react';

export default function ElementToolbar({ onAdd }: { onAdd: (type: string) => void }) {
  return (
    <div>
      <button onClick={() => onAdd('text')}>Texto</button>
      <button onClick={() => onAdd('image')}>Imagem</button>
    </div>
  );
}
