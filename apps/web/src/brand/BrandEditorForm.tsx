export function BrandEditorForm({ profile, onSave }: any) {
  return {
    profile,
    save: () => onSave(profile),
  };
}
