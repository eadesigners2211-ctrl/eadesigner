type SelectionBoxProps = {
  selectedId?: string | null;
};

export default function SelectionBox({ selectedId }: SelectionBoxProps) {
  if (!selectedId) return null;

  return <div data-selected={selectedId} />;
}
