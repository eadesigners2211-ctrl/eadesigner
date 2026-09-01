export type RenderPayload = {
  layout: any;
  variables: Record<string, unknown>;
};

export function replaceVariables(value: string, variables: Record<string, unknown>) {
  return value.replace(/{{(.*?)}}/g, (_, key) => String(variables[key.trim()] ?? ''));
}

export function prepareRender(payload: RenderPayload) {
  return {
    canvas: payload.layout.canvas,
    elements: (payload.layout.elements || []).map((element: any) => ({
      ...element,
      value: typeof element.value === 'string'
        ? replaceVariables(element.value, payload.variables)
        : element.value,
      src: typeof element.src === 'string'
        ? replaceVariables(element.src, payload.variables)
        : element.src
    }))
  };
}
