import { supabase } from '../lib/supabase';

export async function getAssets(organizationId: string) {
  const { data, error } = await supabase
    .from('assets')
    .select('*')
    .eq('organization_id', organizationId)
    .order('created_at', { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function uploadAsset(file: File, organizationId: string) {
  const filePath = `${organizationId}/${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from('assets-original')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data, error } = await supabase
    .from('assets')
    .insert({
      organization_id: organizationId,
      name: file.name,
      storage_path: filePath,
      bucket: 'assets-original',
      mime_type: file.type,
      file_size: file.size
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}
