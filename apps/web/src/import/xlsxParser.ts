export type ParsedSheet = {
  name: string;
  columns: string[];
  rows: Record<string, string>[];
};

/**
 * XLSX parser foundation.
 * The concrete workbook library adapter is injected by the application layer.
 */
export async function parseXLSX(
  file: File,
  reader: (file: File) => Promise<ParsedSheet[]>
): Promise<ParsedSheet[]> {
  if (!file.name.toLowerCase().endsWith('.xlsx')) {
    throw new Error('Arquivo precisa ser XLSX');
  }

  return reader(file);
}

export function normalizeSheetRows(
  columns: string[],
  rows: unknown[][]
): Record<string, string>[] {
  return rows.map((row) => {
    const normalized: Record<string, string> = {};

    columns.forEach((column, index) => {
      normalized[column] = String(row[index] ?? '');
    });

    return normalized;
  });
}
