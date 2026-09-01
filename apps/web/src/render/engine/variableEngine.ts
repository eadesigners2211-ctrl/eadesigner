export type RenderData = Record<string, string | number>;

export function resolveVariables(template: string, data: RenderData) {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    const value = data[key.trim()];
    return value === undefined ? '' : String(value);
  });
}
