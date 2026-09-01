export type VariableMap = Record<string, string | number>;

export function replaceVariables(
  text: string,
  values: VariableMap
): string {
  return text.replace(/{{\s*([^}]+)\s*}}/g, (_, key) => {
    const value = values[key.trim()];
    return value === undefined ? '' : String(value);
  });
}
