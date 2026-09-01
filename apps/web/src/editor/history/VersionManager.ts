export type TemplateVersion = {
  id?: string;
  templateId: string;
  version: number;
  layoutJson: unknown;
  createdAt?: string;
};

export function createVersionSnapshot(
  templateId: string,
  version: number,
  layoutJson: unknown
): TemplateVersion {
  return {
    templateId,
    version,
    layoutJson,
    createdAt: new Date().toISOString(),
  };
}
