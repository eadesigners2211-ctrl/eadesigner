import { loadTemplateToEditor, type TemplateRecord } from './templateLoader';

export async function loadEditorTemplate(template: TemplateRecord) {
  return {
    template,
    state: loadTemplateToEditor(template),
  };
}
