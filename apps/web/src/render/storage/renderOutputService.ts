import type { RenderOutput } from './renderOutputTypes';

export async function createRenderOutput(output: RenderOutput) {
  return {
    ...output,
    status: 'stored',
  };
}

export async function buildRenderOutputPath(
  projectId: string,
  batchId: string,
  filename: string,
) {
  return `projects/${projectId}/${batchId}/${filename}`;
}
