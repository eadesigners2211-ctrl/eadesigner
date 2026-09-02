import { processRenderJob } from './renderProcessor';
import { renderCanvas } from '../engine/canvasRenderer';
import { exportRender } from '../engine/exportRenderer';

export async function executeRenderPipeline(job: any) {
  const preparedLayout = await processRenderJob(job);

  const canvas = await renderCanvas({
    width: preparedLayout.canvas.width,
    height: preparedLayout.canvas.height,
    elements: preparedLayout.elements,
  });

  const output = await exportRender({
    format: 'png',
    width: canvas.width,
    height: canvas.height,
  });

  return {
    jobId: job.id,
    canvas,
    output,
    status: 'completed',
  };
}
