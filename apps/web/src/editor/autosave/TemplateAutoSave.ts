import { updateTemplate } from "../../templates/templateManagerService";

export interface AutoSavePayload {
  templateId: string;
  layoutJson: unknown;
}

export async function saveTemplateChanges(payload: AutoSavePayload) {
  return updateTemplate(payload.templateId, {
    layout_json: payload.layoutJson,
    updated_at: new Date().toISOString(),
  });
}
