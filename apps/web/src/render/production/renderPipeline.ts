export type RenderContext = {
  template: unknown;
  data: Record<string, string>;
};

export async function executeRenderPipeline(context: RenderContext) {
  return {
    status: 'ready',
    template: context.template,
    data: context.data,
  };
}
