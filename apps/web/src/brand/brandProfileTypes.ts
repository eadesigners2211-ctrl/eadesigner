export type BrandProfile = {
  id: string;
  organizationId: string;
  name: string;
  colors: string[];
  fonts: string[];
  logoRequired: boolean;
  minMargin: number;
};

export const defaultEABrand: BrandProfile = {
  id: 'ea-default',
  organizationId: 'e-a-personalizados',
  name: 'E&A Personalizados',
  colors: ['#00D9D9', '#E6007E', '#4A154B'],
  fonts: ['Montserrat', 'Poppins'],
  logoRequired: true,
  minMargin: 40,
};
