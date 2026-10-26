

import "../technologies.css";

import {
  FaJava,
  FaLeaf,
  FaDatabase,
  FaLayerGroup,
  FaCode,
  FaSyncAlt,
  FaExchangeAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";


const technologies = [
  {
    name: "Java",
    description: "Lenguaje principal para desarrollar aplicaciones backend.",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    description: "Desarrollo de aplicaciones y APIs con Java.",
    icon: FaLeaf,
  },
  {
    name: "JPA",
    description: "Persistencia y mapeo de datos entre objetos y bases de datos.",
    icon: FaDatabase,
  },
  {
    name: "MVC",
    description: "Organización del código en distintas responsabilidades.",
    icon: FaLayerGroup,
  },
  {
    name: "REST",
    description: "Creación de endpoints para comunicar aplicaciones.",
    icon: FaCode,
  },
  {
    name: "CRUD",
    description: "Operaciones para crear, consultar, actualizar y eliminar datos.",
    icon: FaSyncAlt,
  },
  {
    name: "DTOs",
    description: "Transferencia de datos entre las distintas capas de una aplicación.",
    icon: FaExchangeAlt,
  },
  {
    name: "Validaciones",
    description: "Control de los datos recibidos por la aplicación.",
    icon: FaCheckCircle,
  },
  {
    name: "Manejo de errores",
    description: "Gestión de excepciones y respuestas ante errores.",
    icon: FaExclamationTriangle,
  },
  {
    name: "Git y GitHub",
    description: "Control de versiones y alojamiento de proyectos.",
    icon: FaGitAlt,
  },
  {
    name: "Maven",
    description: "Gestión de dependencias y construcción de proyectos Java.",
    icon: FaTools,
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="technologies-section">
      <div className="technologies-container">
        <p className="technologies-eyebrow">
          TECNOLOGÍAS Y HERRAMIENTAS
        </p>

        <h2 className="technologies-title">
          Mi stack de <span>desarrollo</span>
        </h2>

        <p className="technologies-description">
          Herramientas y conceptos que utilizo en mis proyectos
          personales de desarrollo backend.
        </p>

        <div className="technologies-grid">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article className="technology-card" key={technology.name}>
                <div className="technology-icon">
                  <Icon />
                </div>

                <div className="technology-content">
                  <h3>{technology.name}</h3>
                  <p>{technology.description}</p>
                  <span className="technology-tag">
                    {technology.name}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
