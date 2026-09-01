export type TemplateRule = {
  allowColors?: string[];
  allowedFonts?: string[];
  requireLogo?: boolean;
  minimumMargin?: number;
};

export function validateTemplateRules(rule: TemplateRule) {
  return {
    colorsRestricted: !!rule.allowColors?.length,
    fontsRestricted: !!rule.allowedFonts?.length,
    logoProtected: !!rule.requireLogo,
    marginProtected: !!rule.minimumMargin,
  };
}
