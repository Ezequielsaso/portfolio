import "../Projects.css";

const projects = [
  {
    title: "API de Gestión de Usuarios",
    description:
      "API REST para administrar usuarios mediante operaciones CRUD, con validaciones y manejo de errores.",
    technologies: ["Java", "Spring Boot", "MVC", "REST API"],
    github: "https://github.com/Ezequielsaso/api-usuarios-spring",
    status: "Completado",
  },
  {
    title: "Sistema de Turnos Médicos",
    description:
      "Aplicación para gestionar turnos médicos según especialidades y horarios.",
    technologies: ["Java", "Spring", "MVC"],
    github: null,
    status: "En desarrollo",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="proyectos">
      <h2 className="section-title">Proyectos</h2>

      <p className="proyectos-descripcion">
        Proyectos en los que aplico mis conocimientos de desarrollo backend.
      </p>

      <div className="proyectos-grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <div className="proyecto-contenido">
              <span
                className={
                  project.status === "Completado"
                    ? "proyecto-estado completado"
                    : "proyecto-estado desarrollo"
                }
              >
                {project.status}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tecnologias">
                {project.technologies.map((technology) => (
                  <span className="tecnologia" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="proyecto-enlaces">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código en GitHub ↗
                </a>
              ) : (
                <span className="proyecto-sin-enlace">
                  Repositorio próximamente
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
