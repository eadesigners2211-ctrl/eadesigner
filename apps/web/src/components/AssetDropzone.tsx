import { useState } from 'react';

export default function AssetDropzone() {
  const [files, setFiles] = useState<File[]>([]);

  function handleFiles(selected: FileList | null) {
    if (!selected) return;
    setFiles(Array.from(selected));
  }

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        onChange={(event) => handleFiles(event.target.files)}
      />

      {files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
