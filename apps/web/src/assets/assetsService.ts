import { supabase } from '@/auth/supabaseClient';

export async function getAssets(organizationId: string) {
  const { data, error } = await supabase
    .from('assets')
    .select('*')
    .eq('organization_id', organizationId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function createAsset(payload: Record<string, unknown>) {
  const { data, error } = await supabase
    .from('assets')
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
}
