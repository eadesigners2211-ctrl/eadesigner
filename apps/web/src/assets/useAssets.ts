import { useEffect, useState } from 'react';
import { getAssets } from './assetsService';

export function useAssets(organizationId?: string) {
  const [assets, setAssets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!organizationId) return;

    getAssets(organizationId)
      .then(setAssets)
      .finally(() => setLoading(false));
  }, [organizationId]);

  return { assets, loading };
}
