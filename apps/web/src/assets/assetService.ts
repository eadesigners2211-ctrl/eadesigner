import type { Asset } from './assetTypes';

export async function listAssets(): Promise<Asset[]> {
  return [];
}

export async function uploadAsset(file: File): Promise<Asset> {
  return {
    id: crypto.randomUUID(),
    name: file.name,
    url: '',
    type: 'image',
  };
}
