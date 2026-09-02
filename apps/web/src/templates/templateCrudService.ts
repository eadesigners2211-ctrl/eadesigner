import { createTemplatePayload } from './templateActions';

export async function createTemplate(input: {
  name: string;
  format: string;
  organizationId: string;
}) {
  const payload = createTemplatePayload(input);

  // Supabase insert integration point
  return {
    ...payload,
    created_at: new Date().toISOString(),
  };
}

export async function duplicateTemplate(template: any) {
  return {
    ...template,
    name: `${template.name} - Cópia`,
    created_at: new Date().toISOString(),
  };
}

export async function deleteTemplate(id: string) {
  return {
    deleted: true,
    id,
  };
}
