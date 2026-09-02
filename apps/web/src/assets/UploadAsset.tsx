import { useState } from 'react';

export function UploadAsset() {
  const [fileName, setFileName] = useState('');

  return (
    <div>
      <input
        type="file"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
      />
      {fileName && <p>{fileName}</p>}
    </div>
  );
}
