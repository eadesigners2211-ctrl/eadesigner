export type BrandProfileRecord = {
  id: string;
  organization_id: string;
  name: string;
  logo_url?: string | null;
  colors_json: Record<string, unknown>;
  fonts_json: Record<string, unknown>;
  rules_json: Record<string, unknown>;
};

export async function getBrandProfile(client: any, organizationId: string) {
  return client
    .from('brand_profiles')
    .select('*')
    .eq('organization_id', organizationId)
    .single();
}

export async function saveBrandProfile(client: any, payload: BrandProfileRecord) {
  return client
    .from('brand_profiles')
    .upsert(payload)
    .select()
    .single();
}
