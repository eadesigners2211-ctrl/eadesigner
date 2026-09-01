import { useState } from 'react';
import { TEMPLATE_FORMATS } from './templateDefaults';

export default function TemplateCreator() {
  const [format, setFormat] = useState(TEMPLATE_FORMATS[0]);

  return (
    <section>
      <h2>Novo Template</h2>

      <select
        value={format.id}
        onChange={(event) => {
          const selected = TEMPLATE_FORMATS.find(
            (item) => item.id === event.target.value
          );

          if (selected) setFormat(selected);
        }}
      >
        {TEMPLATE_FORMATS.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - {item.width}x{item.height}
          </option>
        ))}
      </select>

      <button>
        Criar Template
      </button>
    </section>
  );
}
