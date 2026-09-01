import React from 'react';

export default function CanvasElement({ element }: { element: any }) {
  return (
    <div style={{ position: 'absolute', left: element.x, top: element.y }}>
      {element.type === 'image' ? <img src={element.src} alt="" /> : element.value}
    </div>
  );
}
