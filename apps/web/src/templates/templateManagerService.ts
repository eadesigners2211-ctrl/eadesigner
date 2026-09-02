import { supabase } from '@/lib/supabase';

export async function getTemplates(organizationId: string) {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('organization_id', organizationId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getTemplateById(id: string) {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function updateTemplate(id: string, payload: Record<string, unknown>) {
  const { data, error } = await supabase
    .from('templates')
    .update(payload)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
