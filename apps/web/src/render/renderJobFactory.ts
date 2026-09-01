export interface RenderJobInput {
  templateId: string
  organizationId: string
  payload: Record<string, unknown>
  format: string
}

export interface RenderJob {
  templateId: string
  organizationId: string
  payload: Record<string, unknown>
  format: string
  status: 'pending' | 'processing' | 'completed' | 'error'
}

export function createRenderJob(input: RenderJobInput): RenderJob {
  return {
    ...input,
    status: 'pending',
  }
}
