export type LayoutPayload = {
  templateId: string;
  layoutJson: unknown;
};

export async function saveLayout({ templateId, layoutJson }: LayoutPayload) {
  return {
    templateId,
    layoutJson,
    savedAt: new Date().toISOString(),
  };
}
