import { ImportedDataset } from './importTypes';

export function parseCSV(content: string): ImportedDataset {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    return { columns: [], rows: [] };
  }

  const columns = lines[0].split(',').map((item) => item.trim());

  const rows = lines.slice(1).map((line) => {
    const values = line.split(',');
    return columns.reduce<Record<string, string>>((acc, column, index) => {
      acc[column] = values[index]?.trim() ?? '';
      return acc;
    }, {});
  });

  return { columns, rows };
}
