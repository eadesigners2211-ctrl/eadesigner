import { Transformer } from 'react-konva';
import { useEffect, useRef } from 'react';

type Props = {
  selectedNode: any;
};

export default function TransformerController({ selectedNode }: Props) {
  const transformerRef = useRef<any>(null);

  useEffect(() => {
    if (selectedNode && transformerRef.current) {
      transformerRef.current.nodes([selectedNode]);
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [selectedNode]);

  return <Transformer ref={transformerRef} />;
}
