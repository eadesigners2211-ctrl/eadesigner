import AssetUploader from '../components/AssetUploader';
import AssetCard from '../components/AssetCard';
import { useAssets } from '../hooks/useAssets';

export default function AssetsLibrary() {
  const { assets, loading } = useAssets();

  return (
    <main>
      <h1>Assets</h1>

      <AssetUploader />

      {loading && <p>Carregando...</p>}

      <section>
        {assets?.map((asset: any) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </section>
    </main>
  );
}
