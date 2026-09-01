export type BulkUploadItem = {
  name: string;
  url: string;
  metadata?: Record<string, unknown>;
};

export function BulkUploader() {
  return {
    accept: ['image/png', 'image/jpeg'],
    multiple: true,
  };
}
