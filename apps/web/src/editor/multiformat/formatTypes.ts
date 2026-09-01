export type CanvasFormat = {
  id: string;
  name: string;
  width: number;
  height: number;
  category: 'social' | 'banner';
};

export const DEFAULT_FORMATS: CanvasFormat[] = [
  { id: 'feed', name: 'Feed', width: 1080, height: 1080, category: 'social' },
  { id: 'feed_plus', name: 'Feed Plus', width: 1080, height: 1350, category: 'social' },
  { id: 'story', name: 'Stories/Reels', width: 1080, height: 1920, category: 'social' },
  { id: 'banner_desktop', name: 'Banner Desktop', width: 1920, height: 390, category: 'banner' },
  { id: 'banner_mobile', name: 'Banner Mobile', width: 740, height: 1024, category: 'banner' }
];
