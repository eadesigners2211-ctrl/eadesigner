import React from 'react';

export default function EditorCanvas({ layout }: { layout: any }) {
  return (
    <div className="editor-canvas" style={{ width: layout?.canvas?.width ?? 1080, height: layout?.canvas?.height ?? 1350 }}>
      {(layout?.elements || []).map((element: any) => (
        <div key={element.id} style={{ position: 'absolute', left: element.x, top: element.y }}>
          {element.type === 'text' ? element.value : element.src && <img src={element.src} alt="" />}
        </div>
      ))}
    </div>
  );
}
