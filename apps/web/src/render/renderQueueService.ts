export type RenderStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'error';

export interface RenderJobInput {
  templateId: string;
  format: string;
  payload: Record<string, unknown>;
}

export function createRenderJob(input: RenderJobInput) {
  return {
    template_id: input.templateId,
    format: input.format,
    payload_json: input.payload,
    status: 'pending' as RenderStatus,
  };
}

export function createBatchJobs(
  templateId: string,
  formats: string[],
  rows: Record<string, unknown>[]
) {
  return rows.flatMap((row) =>
    formats.map((format) => createRenderJob({
      templateId,
      format,
      payload: row,
    }))
  );
}
