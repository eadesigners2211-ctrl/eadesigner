export function matchImage(row: Record<string, unknown>, images: string[]) {
  const imageField = String(row.imagem ?? row.image ?? '');

  return images.find((image) => image.includes(imageField)) ?? null;
}
