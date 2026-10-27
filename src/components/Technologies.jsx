
import "../Technologies.css";
import { useEffect, useRef, useState } from "react";

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
import { SiPostman } from "react-icons/si";

const technologies = [
  {
    name: "Java",
    description: "Desarrollo de aplicaciones backend.",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    description: "Desarrollo de aplicaciones y APIs con Java.",
    icon: FaLeaf,
  },
  {
    name: "JPA",
    description: "Persistencia y mapeo de datos.",
    icon: FaDatabase,
  },
  {
    name: "MVC",
    description: "Organización del código por responsabilidades.",
    icon: FaLayerGroup,
  },
  {
    name: "REST",
    description: "Creación de endpoints para comunicar aplicaciones.",
    icon: FaCode,
  },
  {
    name: "CRUD",
    description: "Crear, consultar, actualizar y eliminar datos.",
    icon: FaSyncAlt,
  },
  {
    name: "DTOs",
    description: "Transferencia de datos entre capas.",
    icon: FaExchangeAlt,
  },
  {
    name: "Validaciones",
    description: "Control de los datos recibidos.",
    icon: FaCheckCircle,
  },
  {
    name: "Manejo de errores",
    description: "Gestión de excepciones y respuestas.",
    icon: FaExclamationTriangle,
  },
  {
    name: "Git y GitHub",
    description: "Control de versiones y repositorios.",
    icon: FaGitAlt,
  },
  {
    name: "Maven",
    description: "Gestión de dependencias de Java.",
    icon: FaTools,
  },
  {
    name: "Postman",
    description: "Prueba de endpoints y respuestas de APIs.",
    icon: SiPostman,
  },
];

export default function Technologies() {
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPositionRef = useRef(0);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [dragging, setDragging] = useState(false);


  const items = [...technologies, ...technologies];

  useEffect(() => {
    let frame;

    const animate = (time) => {
      const track = trackRef.current;

      if (track) {
        if (lastTimeRef.current) {
          const delta = Math.min(time - lastTimeRef.current, 32);

          if (!draggingRef.current) {
            positionRef.current += delta * 0.035;

            const halfWidth = track.scrollWidth / 2;

            if (halfWidth > 0 && positionRef.current >= halfWidth) {
              positionRef.current %= halfWidth;
            }

            track.style.transform =
              `translate3d(${-positionRef.current}px, 0, 0)`;
          }
        }

        lastTimeRef.current = time;
      }

      frame = requestAnimationFrame(animate);
      animationRef.current = frame;
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      animationRef.current = null;
      lastTimeRef.current = 0;
    };
  }, []);

  const iniciarArrastre = (e) => {
    if (e.button !== 0) return;

    draggingRef.current = true;
    setDragging(true);
    startXRef.current = e.clientX;
    startPositionRef.current = positionRef.current;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const mover = (e) => {
    if (!draggingRef.current || !trackRef.current) return;

    const halfWidth = trackRef.current.scrollWidth / 2;
    if (!halfWidth) return;

    positionRef.current =
      ((startPositionRef.current - (e.clientX - startXRef.current)) %
        halfWidth +
        halfWidth) %
      halfWidth;

    trackRef.current.style.transform =
      `translate3d(${-positionRef.current}px, 0, 0)`;
  };

  const terminarArrastre = () => {
    draggingRef.current = false;
    setDragging(false);
  };

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
          personales de desarrollo.
        </p>
      </div>

      <div
        className={`technologies-marquee ${dragging ? "is-dragging" : ""}`}
        onPointerDown={iniciarArrastre}
        onPointerMove={mover}
        onPointerUp={terminarArrastre}
        onPointerCancel={terminarArrastre}
        onLostPointerCapture={terminarArrastre}
        aria-label="Tecnologías. Podés arrastrar para recorrerlas."
      >
        <div className="technologies-track" ref={trackRef}>
          {items.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <article
                className="technology-item"
                key={`${technology.name}-${index}`}
                aria-hidden={index >= technologies.length}
              >
                <div className="technology-icon">
                  <Icon />
                </div>

                <div className="technology-content">
                  <h3>{technology.name}</h3>
                  <p>{technology.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <p className="technologies-hint">
        Arrastrá para explorar las tecnologías
      </p>
    </section>
  );
}
