export type ImportRow = Record<string, string | number | null>;

export type ImportedDataset = {
  columns: string[];
  rows: ImportRow[];
};

export type VariableMapping = {
  variable: string;
  sourceColumn: string;
};
