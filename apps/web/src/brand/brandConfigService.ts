export interface BrandConfig {
  name: string;
  colors: string[];
  fonts: string[];
  logoRequired: boolean;
  minimumMargin: number;
}

export function validateBrandConfig(config: BrandConfig) {
  return {
    valid: !!config.name && config.colors.length > 0,
  };
}
