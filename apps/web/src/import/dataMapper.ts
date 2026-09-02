export type DataMapping = Record<string, string>;

export type DatasetRow = Record<string, unknown>;

export function createDataMapping(
  templateVariables: string[],
  columns: string[]
): DataMapping {
  const mapping: DataMapping = {};

  templateVariables.forEach((variable, index) => {
    const column = columns.find(
      (item) => item.toLowerCase() === variable.toLowerCase()
    );

    mapping[variable] = column ?? columns[index] ?? '';
  });

  return mapping;
}

export function mapRowToTemplateData(
  row: DatasetRow,
  mapping: DataMapping
): Record<string, unknown> {
  return Object.entries(mapping).reduce((result, [variable, column]) => {
    result[variable] = row[column];
    return result;
  }, {} as Record<string, unknown>);
}

export function validateMapping(
  variables: string[],
  mapping: DataMapping
) {
  return variables.map((variable) => ({
    variable,
    mapped: Boolean(mapping[variable]),
    column: mapping[variable] ?? null,
  }));
}
