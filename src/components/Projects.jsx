
import "../Projects.css";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "API de Gestión de Usuarios",
    description:
      "API REST para administrar usuarios mediante operaciones CRUD, con validaciones y manejo de errores.",
    technologies: ["Java", "Spring Boot", "MVC", "REST API"],
    github: "https://github.com/Ezequielsaso/api-usuarios-spring",
    images: [
      "/portfolio/postman.png",
      "/portfolio/postmanError.png",
    ],
    status: "Completado",
  },
  {
    title: "E-commerce — Tienda online",
    description:
      "Aplicación web de comercio electrónico que permite explorar productos y simular una experiencia de compra.",
    technologies: ["React", "Javascript", "CSS", "HTML"],
    github: "https://github.com/Ezequielsaso/Integrador",
    images: ["/portfolio/Ecommerce.png",
      "/portfolio/EcommerceShop.png"

    ],
    status: "Completado",
  },
  {
    title: "Buscador de Pizzas por ID",
    description:
      "Aplicación web que permite buscar pizzas por su ID y visualizar sus datos, incluyendo nombre, precio, ingredientes e imagen. Utiliza localStorage para guardar y recuperar la última pizza consultada.",
    technologies: ["Javascript", "CSS", "HTML"],
    github: "https://github.com/Ezequielsaso/Integrador",
    images: ["/portfolio/pizzaPrueba.png",
      "/portfolio/pizzaError.png"

    ],
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
  const [imagenAbierta, setImagenAbierta] = useState(null);
  const [indices, setIndices] = useState({});

  const cambiarImagen = (titulo, total, direccion) => {
    setIndices((prev) => ({
      ...prev,
      [titulo]: ((prev[titulo] || 0) + direccion + total) % total,
    }));
  };

  useEffect(() => {
    const cerrarConEscape = (e) => {
      if (e.key === "Escape") {
        setImagenAbierta(null);
      }

      if (imagenAbierta && e.key === "ArrowRight") {
        e.preventDefault();
        cambiarImagen(imagenAbierta.titulo, imagenAbierta.images.length, 1);
      }

      if (imagenAbierta && e.key === "ArrowLeft") {
        e.preventDefault();
        cambiarImagen(imagenAbierta.titulo, imagenAbierta.images.length, -1);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [imagenAbierta]);

  return (
    <section id="projects" className="proyectos">
      <h2 className="section-title">Proyectos</h2>

      <p className="proyectos-descripcion">
        Proyectos en los que aplico mis conocimientos de programación.
      </p>

      <div className="proyectos-grid">
        {projects.map((project) => {
          const imagenes = project.images || (project.image ? [project.image] : []);
          const indice = indices[project.title] || 0;
          const imagenActual = imagenes[indice];

          return (
            <article className="card" key={project.title}>
              {imagenActual && (
                <div className="project-preview">
                  <div className="preview-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <img
                    src={imagenActual}
                    alt={`Vista previa de ${project.title}`}
                    className="project-image"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / rect.width;
                      const y = (e.clientY - rect.top) / rect.height;

                      e.currentTarget.style.transform =
                        `scale(1.25) translate(${(0.5 - x) * 20}px, ${(0.5 - y) * 20}px)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onClick={() =>
                      setImagenAbierta({
                        titulo: project.title,
                        images: imagenes,
                        indice,
                      })
                    }
                  />

                  {imagenes.length > 1 && (
                    <>
                      <button
                        className="preview-flecha preview-anterior"
                        aria-label="Imagen anterior"
                        onClick={(e) => {
                          e.stopPropagation();
                          cambiarImagen(project.title, imagenes.length, -1);
                        }}
                      >
                        &#10094;
                      </button>

                      <button
                        className="preview-flecha preview-siguiente"
                        aria-label="Imagen siguiente"
                        onClick={(e) => {
                          e.stopPropagation();
                          cambiarImagen(project.title, imagenes.length, 1);
                        }}
                      >
                        &#10095;
                      </button>

                      <span className="preview-contador">
                        {indice + 1}/{imagenes.length}
                      </span>
                    </>
                  )}
                </div>
              )}

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
          );
        })}
      </div>

      {imagenAbierta && (
        <div
          className="lightbox"
          onClick={() => setImagenAbierta(null)}
        >
          <button
            className="lightbox-cerrar"
            onClick={() => setImagenAbierta(null)}
            aria-label="Cerrar imagen"
          >
            &times;
          </button>

          {imagenAbierta.images.length > 1 && (
            <button
              className="lightbox-flecha lightbox-anterior"
              aria-label="Imagen anterior"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(imagenAbierta.titulo, imagenAbierta.images.length, -1);
                setImagenAbierta((prev) => ({
                  ...prev,
                  indice: (prev.indice - 1 + prev.images.length) % prev.images.length,
                }));
              }}
            >
              &#10094;
            </button>
          )}

          <img
            key={imagenAbierta.images[indices[imagenAbierta.titulo] || imagenAbierta.indice]}
            src={imagenAbierta.images[indices[imagenAbierta.titulo] ?? imagenAbierta.indice]}
            alt={`Vista ampliada de ${imagenAbierta.titulo}`}
            className="lightbox-imagen"
            onClick={(e) => e.stopPropagation()}
          />

          {imagenAbierta.images.length > 1 && (
            <button
              className="lightbox-flecha lightbox-siguiente"
              aria-label="Imagen siguiente"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(imagenAbierta.titulo, imagenAbierta.images.length, 1);
                setImagenAbierta((prev) => ({
                  ...prev,
                  indice: (prev.indice + 1) % prev.images.length,
                }));
              }}
            >
              &#10095;
            </button>
          )}
        </div>
      )}
    </section>
  );
}
