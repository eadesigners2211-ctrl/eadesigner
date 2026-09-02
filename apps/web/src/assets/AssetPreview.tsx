export function AssetPreview({ asset }: { asset?: { name?: string; url?: string } }) {
  if (!asset) return null;

  return (
    <aside>
      <h3>{asset.name}</h3>
      {asset.url && <img src={asset.url} alt={asset.name} />}
    </aside>
  );
}
