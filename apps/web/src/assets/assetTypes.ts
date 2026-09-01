export type AssetType = 'image' | 'video' | 'font' | 'other';

export type Asset = {
  id: string;
  name: string;
  url: string;
  type: AssetType;
  folder?: string;
  tags?: string[];
};
