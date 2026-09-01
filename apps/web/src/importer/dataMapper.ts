import type { DatasetRow, FieldMapping } from './datasetTypes'

export function mapRowToVariables(
  row: DatasetRow,
  mappings: FieldMapping[]
) {
  return mappings.reduce<Record<string, unknown>>((acc, mapping) => {
    acc[mapping.variableName] = row[mapping.sourceColumn] ?? null
    return acc
  }, {})
}

export function mapDataset(rows: DatasetRow[], mappings: FieldMapping[]) {
  return rows.map((row) => mapRowToVariables(row, mappings))
}
