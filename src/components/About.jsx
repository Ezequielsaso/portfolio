import { FaLinkedin, FaGithub, FaJava, FaLeaf, FaDatabase, FaReact } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#1e1e1e",
        color: "#e13838",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        gap: "120px",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          textAlign: "center",
          backgroundColor: "#2c2c2c",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ fontSize: "35px", fontWeight: "bold", marginBottom: "20px" }}>
          Sobre mí
        </h2>

        <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
          Actualmente me encuentro formándome en desarrollo de software, con foco en backend utilizando
          Java y Spring Boot. He desarrollado proyectos personales donde implementé APIs REST, manejo
          de DTOs, validaciones, persistencia con JPA, aplicando buenas prácticas y patrón MVC
          (Controller, Service, Repository).
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <FaJava size={34} color="#ffffff" />
          <FaLeaf size={34} color="#ffffff" />
          <FaDatabase size={34} color="#ffffff" />
          <FaReact size={34} color="#ffffff" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >

        <img
          src={`${import.meta.env.BASE_URL}yo.JPG`}
          alt="Foto de perfil"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "150px",
            objectFit: "cover",
            border: "0.5px solid #e13838",
          }}
        />


        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="https://www.linkedin.com/in/cristian-ezequiel-heredia-21b032230/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} color="#ffffff" />
          </a>

          <a href="https://github.com/Ezequielsaso" target="_blank" rel="noreferrer">
            <FaGithub size={28} color="#ffffff" />
          </a>
        </div>

        <a
          href="Cristian Ezequiel Heredia CV.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: "10px",
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #e13838",
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Ver CV
        </a>
      </div>
    </section>
  );
}
