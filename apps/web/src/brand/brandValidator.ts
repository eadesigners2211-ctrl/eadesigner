import type { BrandProfile } from './brandProfileTypes';

export function validateElementAgainstBrand(element: any, brand: BrandProfile) {
  const errors: string[] = [];

  if (element.color && !brand.colors.includes(element.color)) {
    errors.push(`Color ${element.color} is not allowed`);
  }

  if (element.font && !brand.fonts.includes(element.font)) {
    errors.push(`Font ${element.font} is not allowed`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
