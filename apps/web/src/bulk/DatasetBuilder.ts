export function buildDataset(rows: Record<string, unknown>[], images: string[]) {
  return rows.map((row, index) => ({
    index,
    data: row,
    image: images[index] ?? null,
    status: 'ready',
  }));
}
