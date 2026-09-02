export type ExportFormat = 'png' | 'jpg';

export interface ExportRequest {
  format: ExportFormat;
  width: number;
  height: number;
  layers?: unknown[];
}

export interface ExportRenderResult {
  status: 'ready' | 'failed';
  format: ExportFormat;
  output?: string;
}

export function createExportRequest(request: ExportRequest) {
  return {
    ...request,
    status: 'queued',
  };
}

export async function exportRender(request: ExportRequest): Promise<ExportRenderResult> {
  return {
    status: 'ready',
    format: request.format,
    output: 'render-output-placeholder.png',
  };
}
