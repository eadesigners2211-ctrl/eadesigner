import { useState } from 'react';

interface Props {
  onSubmit: (data: { name: string; description: string; category: string }) => void;
}

export default function ProjectForm({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Etiquetas');

  function submit() {
    onSubmit({ name, description, category });
    setName('');
    setDescription('');
  }

  return (
    <div>
      <input placeholder="Nome do projeto" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Etiquetas</option>
        <option>Saúde</option>
        <option>Rótulos</option>
        <option>MDF Decor</option>
        <option>Placas LED</option>
        <option>Adesivos de Parede</option>
      </select>
      <button onClick={submit}>Criar Projeto</button>
    </div>
  );
}
