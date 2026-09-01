type AssetCardProps = {
  name: string;
  url?: string;
  type?: string;
};

export default function AssetCard({ name, url, type }: AssetCardProps) {
  return (
    <div className="asset-card">
      {url && <img src={url} alt={name} />}
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  );
}
