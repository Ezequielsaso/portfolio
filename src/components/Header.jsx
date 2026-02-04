import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1e1e1e", 
        color: "#e13838", 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
      }}
    >
      {}
      <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "bold", marginLeft: "280px" }}>
        Cristian Ezequiel Heredia
      </h1>

      {}
      <nav style={{ display: "flex", gap: "30px" }}>
        <a href="#about" style={linkStyle}>Inicio</a>
        <a href="#projects" style={linkStyle}>Proyectos</a>
        <a href="#contact" style={linkStyle}>Contacto</a>
      </nav>

      {}
      <div style={{ display: "flex", gap: "20px" }}>
        <a
          href="https://www.linkedin.com/in/cristian-ezequiel-heredia-21b032230/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={24} color="#ffffff" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub size={24} color="#ffffff" />
        </a>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "#e13838", 
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
  transition: "opacity 0.3s",
  opacity: 0.85,
};

