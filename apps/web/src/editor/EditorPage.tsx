export function EditorPage({ templateId }: { templateId?: string }) {
  return (
    <section>
      <h1>E&A Visual Editor</h1>
      <p>Editor do template {templateId ?? 'novo'}</p>
    </section>
  );
}
