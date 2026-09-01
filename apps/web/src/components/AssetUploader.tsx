import { useState } from 'react';

export default function AssetUploader() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setFile(event.target.files?.[0] ?? null);
        }}
      />

      {file && <p>{file.name}</p>}
    </div>
  );
}
