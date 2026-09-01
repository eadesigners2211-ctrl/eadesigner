import { Stage, Layer } from 'react-konva';

import { Layout } from '../core/editorTypes';

type Props = {
  layout: Layout;
};

export default function StageCanvas({ layout }: Props) {
  return (
    <Stage width={layout.canvas.width} height={layout.canvas.height}>
      <Layer />
    </Stage>
  );
}
