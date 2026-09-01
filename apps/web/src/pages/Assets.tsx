import { useOrganization } from '../hooks/useOrganization';
import { useAssets } from '../hooks/useAssets';

export default function Assets() {
  const organization = useOrganization();
  const { assets, loading } = useAssets(organization?.organization_id);

  return (
    <main>
      <h1>Assets</h1>

      {loading && <p>Carregando...</p>}

      {!loading && assets.map((asset) => (
        <div key={asset.id}>
          <h3>{asset.name}</h3>
          <p>{asset.mime_type}</p>
        </div>
      ))}

      {!loading && assets.length === 0 && (
        <p>Nenhum asset cadastrado.</p>
      )}
    </main>
  );
}
