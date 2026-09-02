import { supabase } from '@/auth/supabaseClient';

export type TemplateRecord = {
  id: string;
  name: string;
  format?: string;
  thumbnail_url?: string;
  organization_id?: string;
  created_at?: string;
};

export async function getTemplates(organizationId?: string) {
  let query = supabase
    .from('templates')
    .select('*')
    .order('created_at', { ascending: false });

  if (organizationId) {
    query = query.eq('organization_id', organizationId);
  }

  const { data, error } = await query;

  if (error) throw error;

  return (data ?? []) as TemplateRecord[];
}

export async function getTemplateById(id: string) {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  return data as TemplateRecord;
}

export async function createTemplate(payload: Partial<TemplateRecord>) {
  const { data, error } = await supabase
    .from('templates')
    .insert(payload)
    .select()
    .single();

  if (error) throw error;

  return data as TemplateRecord;
}
