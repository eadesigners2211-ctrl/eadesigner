export type TemplateDefinition = {
  id: string;
  layout_json: Record<string, unknown>;
};

export function loadTemplate(template: TemplateDefinition) {
  return template.layout_json;
}
