export interface TemplateVersionPayload {
  templateId: string;
  layoutJson: unknown;
  thumbnailUrl?: string;
  createdBy?: string;
}

export async function createTemplateVersion(payload: TemplateVersionPayload) {
  return {
    template_id: payload.templateId,
    layout_json: payload.layoutJson,
    thumbnail_url: payload.thumbnailUrl ?? null,
    created_by: payload.createdBy ?? null,
    created_at: new Date().toISOString(),
  };
}

export async function getTemplateVersions(templateId: string) {
  return {
    templateId,
    versions: [],
  };
}
