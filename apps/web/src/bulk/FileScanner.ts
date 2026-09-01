export function scanFiles(files: File[]) {
  return files.map((file, index) => ({
    id: index + 1,
    name: file.name,
    type: file.type,
  }));
}
