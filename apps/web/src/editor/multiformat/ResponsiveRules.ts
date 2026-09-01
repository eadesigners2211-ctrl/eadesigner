export type ResponsiveRule = {
  scale?: number;
  anchor?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  mode?: 'contain' | 'cover' | 'fixed';
};

export type ElementResponsiveConfig = {
  elementId: string;
  rules: ResponsiveRule;
};

export function applyResponsiveRule(element: any, rule: ResponsiveRule) {
  return {
    ...element,
    responsive: rule,
  };
}
