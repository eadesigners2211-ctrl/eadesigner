import type { TemplateVersion } from './VersionManager';

type Props = {
  versions: TemplateVersion[];
  onRestore?: (version: TemplateVersion) => void;
};

export function TemplateHistory({ versions, onRestore }: Props) {
  return (
    <div>
      <h3>Histórico de versões</h3>
      {versions.map((version) => (
        <div key={version.id ?? version.version}>
          Versão {version.version}
          {onRestore && (
            <button onClick={() => onRestore(version)}>
              Restaurar
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
