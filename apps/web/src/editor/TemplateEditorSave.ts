import { updateTemplate } from "@/templates/templateManagerService";

export interface SaveTemplatePayload {
  templateId: string;
  layoutJson: unknown;
  thumbnail?: string;
}

/**
 * Persists the current canvas state into the template record.
 * The canvas emits the updated layout_json and this service keeps
 * the editor independent from the database implementation.
 */
export async function saveTemplateLayout(payload: SaveTemplatePayload) {
  const { templateId, layoutJson, thumbnail } = payload;

  return updateTemplate(templateId, {
    layout_json: layoutJson,
    ...(thumbnail ? { thumbnail } : {}),
    updated_at: new Date().toISOString(),
  });
}
