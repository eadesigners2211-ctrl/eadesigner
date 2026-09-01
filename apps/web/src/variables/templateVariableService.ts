export type TemplateVariable = {
  id?: string;
  template_id: string;
  organization_id?: string;
  name: string;
  type: 'text' | 'image' | 'number' | 'currency';
  required?: boolean;
  default_value?: string;
};

export function extractVariables(text: string): string[] {
  const matches = text.match(/{{(.*?)}}/g) || [];
  return [...new Set(matches.map(item => item.replace('{{', '').replace('}}', '').trim()))];
}

export function mapVariables(template: string, data: Record<string, string>) {
  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? '');
}
