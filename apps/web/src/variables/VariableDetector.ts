export function detectVariables(text: string): string[] {
  const matches = text.match(/{{\s*([^}]+)\s*}}/g) || [];

  return [...new Set(
    matches.map((item) =>
      item.replace('{{', '').replace('}}', '').trim()
    )
  )];
}
