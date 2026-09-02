export type RenderJobStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface CreateRenderJobInput {
  templateId: string;
  organizationId: string;
  inputData: Record<string, unknown>;
  format: string;
}

export interface RenderJob {
  id: string;
  templateId: string;
  organizationId: string;
  inputData: Record<string, unknown>;
  format: string;
  status: RenderJobStatus;
  progress: number;
  outputUrl?: string;
}

/**
 * Service foundation for connecting render jobs with Supabase.
 * The database adapter will be injected when the render_jobs migration is connected.
 */
export async function createRenderJob(input: CreateRenderJobInput): Promise<RenderJob> {
  return {
    id: crypto.randomUUID(),
    templateId: input.templateId,
    organizationId: input.organizationId,
    inputData: input.inputData,
    format: input.format,
    status: 'pending',
    progress: 0,
  };
}

export async function updateRenderJobStatus(
  id: string,
  status: RenderJobStatus,
  progress: number
) {
  return {
    id,
    status,
    progress,
  };
}
