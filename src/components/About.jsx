
import "../about.css";
import {
  FaLinkedin,
  FaGithub,
  FaJava,
  FaLeaf,
  FaDatabase,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="about-eyebrow">
            DESARROLLADOR BACKEND
          </p>

          <h1>
            Cristian Ezequiel
            <span> Heredia</span>
          </h1>

          <h2>Java · Spring Boot · APIs REST</h2>

          <p className="about-description">
            Me estoy formando en desarrollo de software, con foco en
            backend utilizando Java y Spring Boot. Desarrollo proyectos
            personales aplicando APIs REST, DTOs, validaciones, persistencia
            con JPA y arquitectura MVC, separando las responsabilidades
            entre Controller, Service y Repository.
          </p>

          <div className="about-skills">
            <span><FaJava /> Java</span>
            <span><FaLeaf /> Spring Boot</span>
            <span><FaDatabase /> JPA / Datos</span>
          </div>

          <div className="about-actions">
            <a href="#projects" className="about-btn about-btn-primary">
              Ver mis proyectos
            </a>

            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn about-btn-secondary"
            >
              Ver CV
            </a>
          </div>

          <div className="about-socials">
            <a
              href="https://www.linkedin.com/in/cristian-ezequiel-heredia-21b032230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/Ezequielsaso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        <div className="about-profile">
          <div className="about-image-frame">
            <img
              src={`${import.meta.env.BASE_URL}yo.JPG`}
              alt="Foto de Cristian Ezequiel Heredia"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
