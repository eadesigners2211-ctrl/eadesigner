import { supabase } from '@/lib/supabase';

export async function uploadAsset(file: File, folder = 'general') {
  const path = `${folder}/${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from('assets')
    .upload(path, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from('assets')
    .getPublicUrl(path);

  return {
    path,
    url: data.publicUrl,
    name: file.name
  };
}

export async function saveAssetMetadata(asset: any) {
  return supabase
    .from('assets')
    .insert(asset)
    .select()
    .single();
}
