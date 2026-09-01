import { supabase } from '@/integrations/supabase/client';

export async function createTemplateVersion(payload: {
  template_id: string;
  organization_id?: string;
  layout_json: unknown;
  version_number: number;
}) {
  const { data, error } = await supabase
    .from('template_versions')
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getTemplateVersions(templateId: string) {
  const { data, error } = await supabase
    .from('template_versions')
    .select('*')
    .eq('template_id', templateId)
    .order('version_number', { ascending: false });

  if (error) throw error;
  return data;
}
