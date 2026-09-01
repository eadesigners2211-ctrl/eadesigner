export function assetToLayoutElement(asset: any) {
  return {
    type: 'image',
    src: asset.file_url,
    asset_id: asset.id,
  };
}
