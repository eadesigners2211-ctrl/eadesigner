export type RenderOutput = {
  jobId: string;
  format: string;
  path: string;
};

export function createOutputPath(jobId: string, format: string) {
  return `renders/${jobId}/${format}/output.png`;
}
