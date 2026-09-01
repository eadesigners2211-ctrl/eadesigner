import { supabase } from '../lib/supabase';

export async function getProjects(organizationId: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('organization_id', organizationId)
    .order('created_at', { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function createProject(input: {
  organization_id: string;
  name: string;
  description?: string;
  category?: string;
}) {
  const { data, error } = await supabase
    .from('projects')
    .insert(input)
    .select()
    .single();

  if (error) throw error;

  return data;
}
