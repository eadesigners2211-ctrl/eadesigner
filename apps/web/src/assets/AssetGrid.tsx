import { AssetCard } from './AssetCard';

export function AssetGrid({ assets = [] }: { assets?: any[] }) {
  return (
    <section>
      {assets.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </section>
  );
}
