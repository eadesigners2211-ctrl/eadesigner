import TextElement from './TextElement';
import ImageElement from './ImageElement';

type ElementRendererProps = {
  element: any;
};

export default function ElementRenderer({ element }: ElementRendererProps) {
  switch (element.type) {
    case 'text':
      return <TextElement {...element} />;

    case 'image':
      return <ImageElement {...element} />;

    default:
      return null;
  }
}
