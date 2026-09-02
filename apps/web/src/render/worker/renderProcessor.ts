export async function processRenderTemplate(layoutJson: unknown, data: Record<string, unknown>) {
  return {
    layoutJson,
    data,
    rendered: false
  };
}

export async function prepareRenderPayload(job: unknown) {
  return {
    job,
    ready: true
  };
}
