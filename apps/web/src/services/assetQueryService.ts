import { supabase } from '../lib/supabase';

export async function searchAssets(organizationId: string, query = '') {
  let request = supabase
    .from('assets')
    .select('*')
    .eq('organization_id', organizationId);

  if (query) {
    request = request.ilike('name', `%${query}%`);
  }

  const { data, error } = await request;

  if (error) throw error;

  return data ?? [];
}
