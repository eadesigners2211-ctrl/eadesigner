export type TemplateVariableMap = Record<string, string | number>;

const VARIABLE_PATTERN = /{{\s*([^}]+)\s*}}/g;

export function extractTemplateVariables(value: string): string[] {
  const variables = new Set<string>();

  value.replace(VARIABLE_PATTERN, (_, variable) => {
    variables.add(variable.trim());
    return '';
  });

  return Array.from(variables);
}

export function replaceTemplateVariables(
  value: string,
  data: TemplateVariableMap
): string {
  return value.replace(VARIABLE_PATTERN, (_, variable) => {
    const key = variable.trim();
    return data[key] !== undefined ? String(data[key]) : `{{${key}}}`;
  });
}

export function resolveLayoutVariables(layout: unknown, data: TemplateVariableMap) {
  return JSON.parse(
    JSON.stringify(layout),
    (_, value) => {
      if (typeof value === 'string') {
        return replaceTemplateVariables(value, data);
      }

      return value;
    }
  );
}
