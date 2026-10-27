import "../Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#about" className="footer-brand">
          CEH<span>.</span>
        </a>

        <p className="footer-text">
          Desarrollador Java Backend
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Ezequielsaso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/cristian-ezequiel-heredia-21b032230/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="#about" className="footer-top">
            <FaArrowUp />
            Volver arriba
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Cristian Ezequiel Heredia.
        </p>
    
      </div>
    </footer>
  );
}
