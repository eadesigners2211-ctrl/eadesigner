import { LayoutDocument } from './editorTypes';

export const defaultLayout: LayoutDocument = {
  canvas: {
    width: 1080,
    height: 1350,
  },
  elements: [
    {
      id: 'background',
      type: 'background',
      x: 0,
      y: 0,
      width: 1080,
      height: 1350,
      content: '#ffffff',
    },
    {
      id: 'title',
      type: 'text',
      x: 120,
      y: 180,
      content: '{{titulo}}',
    },
  ],
};
