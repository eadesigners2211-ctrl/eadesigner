import { supabase } from '../lib/supabase';

export async function uploadAssetFile(
  organizationId: string,
  file: File
) {
  const path = `${organizationId}/${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from('assets-original')
    .upload(path, file);

  if (error) throw error;

  return data;
}
