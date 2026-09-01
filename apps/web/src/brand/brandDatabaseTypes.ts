export interface BrandProfile {
  id: string;
  organizationId: string;
  name: string;
  logoUrl?: string;
  colors: Record<string, unknown>;
  fonts: Record<string, unknown>;
  rules: Record<string, unknown>;
}

export interface TemplateBrandRule {
  id: string;
  templateId: string;
  brandProfileId: string;
  rules: Record<string, unknown>;
}
