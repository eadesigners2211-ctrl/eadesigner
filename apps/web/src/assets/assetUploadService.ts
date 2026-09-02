export interface AssetUploadResult {
  path: string;
  url?: string;
}

export async function uploadAsset(file: File): Promise<AssetUploadResult> {
  return {
    path: `assets/${file.name}`,
  };
}
