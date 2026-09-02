type AssetCardProps = {
  asset: {
    id: string;
    name: string;
    url?: string;
    type?: string;
  };
};

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <article>
      {asset.url && <img src={asset.url} alt={asset.name} />}
      <strong>{asset.name}</strong>
      <span>{asset.type || 'image'}</span>
    </article>
  );
}
