export type TemplateAction = 'edit' | 'duplicate' | 'delete';

export function getTemplateEditorPath(id: string) {
  return `/editor/${id}`;
}

export function createTemplatePayload(input: {
  name: string;
  format: string;
  organizationId: string;
}) {
  return {
    name: input.name,
    format: input.format,
    organization_id: input.organizationId,
    layout_json: {
      canvas: {
        width: 1080,
        height: 1080,
      },
      elements: [],
    },
  };
}
