import type { EditorState } from './editorState';

export type TemplateRecord = {
  id: string;
  name: string;
  layout_json?: EditorState;
};

export function loadTemplateToEditor(template: TemplateRecord): EditorState {
  return template.layout_json ?? {
    canvas: {
      width: 1080,
      height: 1080,
    },
    elements: [],
  };
}
