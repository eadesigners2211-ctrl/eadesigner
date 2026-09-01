export type ExportFormat = 'png' | 'jpg';

export interface ExportRequest {
  format: ExportFormat;
  width: number;
  height: number;
}

export function createExportRequest(request: ExportRequest) {
  return {
    ...request,
    status: 'queued',
  };
}
