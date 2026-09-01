import { supabase } from '../lib/supabase';

export async function createTemplate(payload: any) {
  const { data, error } = await supabase
    .from('templates')
    .insert(payload)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getTemplates(organizationId: string) {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('organization_id', organizationId);

  if (error) throw error;

  return data ?? [];
}
