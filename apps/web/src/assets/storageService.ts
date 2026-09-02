import { supabase } from '@/lib/supabase';

const BUCKET = 'assets';

export async function uploadAsset(file: File, organizationId: string, folder = 'general') {
  const path = `organizations/${organizationId}/${folder}/${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(path);

  return {
    path,
    url: data.publicUrl,
    name: file.name,
  };
}

export async function saveAssetMetadata(asset: any) {
  return supabase
    .from('assets')
    .insert(asset)
    .select()
    .single();
}
