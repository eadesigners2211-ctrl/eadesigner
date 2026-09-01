export type RenderOutput = {
  fileName: string;
  buffer: Uint8Array;
};

export async function uploadRender(output: RenderOutput) {
  return {
    path: `renders/${output.fileName}`,
    status: 'uploaded',
  };
}
