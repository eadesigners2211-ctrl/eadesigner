type AssetFiltersProps = {
  onSearch?: (value: string) => void;
};

export default function AssetFilters({ onSearch }: AssetFiltersProps) {
  return (
    <div>
      <input
        placeholder="Buscar assets..."
        onChange={(event) => onSearch?.(event.target.value)}
      />
    </div>
  );
}
