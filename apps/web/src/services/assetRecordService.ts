import { supabase } from '../lib/supabase';

export async function createAssetRecord(asset: {
  organization_id: string;
  name: string;
  path: string;
  type?: string;
  url?: string;
}) {
  const { data, error } = await supabase
    .from('assets')
    .insert(asset)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteAsset(id: string) {
  const { error } = await supabase
    .from('assets')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
