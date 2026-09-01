export type DatasetRow = Record<string, string | number | boolean | null>

export interface ImportedDataset {
  name: string
  columns: string[]
  rows: DatasetRow[]
  totalRows: number
}

export interface FieldMapping {
  sourceColumn: string
  variableName: string
  variableType: 'text' | 'image' | 'number' | 'currency'
}
