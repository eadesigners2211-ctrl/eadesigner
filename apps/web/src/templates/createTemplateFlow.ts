export type CreateTemplatePayload = {
  name: string;
  format: string;
  width: number;
  height: number;
};

export function createInitialLayout(payload: CreateTemplatePayload) {
  return {
    canvas: {
      width: payload.width,
      height: payload.height,
    },
    elements: [
      {
        id: 'background',
        type: 'background',
      },
      {
        id: 'title',
        type: 'text',
        content: '{{titulo}}',
        x: 100,
        y: 100,
      },
    ],
    metadata: {
      name: payload.name,
      format: payload.format,
    },
  };
}

export function openEditorPayload(payload: CreateTemplatePayload) {
  return {
    ...payload,
    layout: createInitialLayout(payload),
  };
}
