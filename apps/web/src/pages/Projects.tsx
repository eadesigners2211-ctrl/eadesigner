import { useOrganization } from '../hooks/useOrganization';
import { useProjects } from '../hooks/useProjects';

export default function Projects() {
  const organization = useOrganization();
  const { projects, loading } = useProjects(organization?.organization_id);

  return (
    <main>
      <h1>Projetos</h1>

      {loading && <p>Carregando...</p>}

      {!loading && projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}

      {!loading && projects.length === 0 && (
        <p>Nenhum projeto cadastrado.</p>
      )}
    </main>
  );
}
