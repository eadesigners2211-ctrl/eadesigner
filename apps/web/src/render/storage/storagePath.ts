export interface RenderStoragePathInput {
  projectId: string;
  batchId: string;
  filename: string;
}

export function buildRenderStoragePath(input: RenderStoragePathInput) {
  return `projects/${input.projectId}/${input.batchId}/${input.filename}`;
}
