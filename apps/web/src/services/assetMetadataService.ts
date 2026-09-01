export function buildAssetMetadata(file: File) {
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    extension: file.name.split('.').pop()?.toLowerCase() || '',
    created_at: new Date().toISOString()
  };
}
