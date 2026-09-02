export default function TemplatesPage() {
  const templates = [];

  return (
    <main className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Templates</h1>
        <button className="rounded-xl border px-4 py-2">+ Novo Template</button>
      </div>

      {templates.length === 0 ? (
        <div className="rounded-xl border p-8 text-center">
          Nenhum template criado ainda.
        </div>
      ) : null}
    </main>
  );
}
