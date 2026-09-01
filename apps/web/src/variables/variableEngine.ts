export type VariableValue = string | number | boolean | null;

export type VariableMap = Record<string, VariableValue>;

export function replaceVariables(
  content: string,
  variables: VariableMap
): string {
  return content.replace(/{{(.*?)}}/g, (_, key) => {
    const value = variables[key.trim()];
    return value === undefined || value === null ? '' : String(value);
  });
}

export function extractVariables(content: string): string[] {
  const matches = content.match(/{{(.*?)}}/g) || [];
  return [...new Set(matches.map((item) => item.replace(/[{}]/g, '').trim()))];
}
