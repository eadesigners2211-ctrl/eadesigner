export function resolveVariables(
  layout: unknown,
  variables: Record<string, string>
) {
  const json = JSON.stringify(layout);

  const resolved = json.replace(/{{(.*?)}}/g, (_, key) => {
    return variables[key.trim()] ?? '';
  });

  return JSON.parse(resolved);
}
