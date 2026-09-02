import { getTemplateById } from '../templates/templatesService';
import { saveLayoutJson } from './layoutSaveService';
import type { EditorState } from './editorState';

export async function loadEditorTemplate(templateId: string) {
  const template = await getTemplateById(templateId);

  if (!template) {
    throw new Error('Template não encontrado');
  }

  return template;
}

export async function saveEditorTemplate(
  templateId: string,
  state: EditorState,
) {
  return saveLayoutJson(templateId, state);
}
