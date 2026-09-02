export type RenderElement = {
  type: string;
  [key: string]: unknown;
};

import { renderText } from './textRenderer';
import { renderAsset } from './assetRenderer';

export function renderElement(element: RenderElement) {
  switch (element.type) {
    case 'text':
      return renderText(element);
    case 'image':
      return renderAsset(element);
    default:
      return {
        type: 'unknown',
        element,
      };
  }
}
