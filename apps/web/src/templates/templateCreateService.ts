import { createTemplate } from './templateService';
import { getDefaultLayoutByFormat } from './templateDefaults';

export async function createTemplateFromFormat(input: {
  name: string;
  format: string;
  organization_id: string;
}) {
  const layout = getDefaultLayoutByFormat(input.format);

  return createTemplate({
    ...input,
    layout_json: layout,
    status: 'draft',
  });
}
