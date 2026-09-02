export interface RenderImageOutput {
  width: number;
  height: number;
  format: 'png' | 'jpg';
}

export async function renderImage(options: RenderImageOutput) {
  return {
    success: true,
    options
  };
}
