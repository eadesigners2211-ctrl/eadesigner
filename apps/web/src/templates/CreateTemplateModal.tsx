type TemplateFormat = {
  id: string;
  name: string;
  width: number;
  height: number;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (format: TemplateFormat) => void;
};

const formats: TemplateFormat[] = [
  { id: 'feed', name: 'Feed 1080x1080', width: 1080, height: 1080 },
  { id: 'feed_plus', name: 'Feed Plus 1080x1350', width: 1080, height: 1350 },
  { id: 'story', name: 'Stories/Reels 1080x1920', width: 1080, height: 1920 },
  { id: 'banner_desktop', name: 'Banner Desktop 1920x390', width: 1920, height: 390 }
];

export default function CreateTemplateModal({ open, onClose, onCreate }: Props) {
  if (!open) return null;

  return (
    <div>
      <h2>Novo Template</h2>
      <p>Escolha o formato da arte</p>

      {formats.map((format) => (
        <button key={format.id} onClick={() => onCreate(format)}>
          {format.name}
        </button>
      ))}

      <button onClick={onClose}>Cancelar</button>
    </div>
  );
}
