export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        padding: "80px 20px",
        marginTop: "-120px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "100px",
          fontSize: "35px",
          color: "#e13838",
          fontWeight: "bold",
        }}
      >
        Proyectos
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3 style={{ color: "#e13838" }}>API Gestión de Usuarios</h3>
          <p>
            API REST con CRUD, validaciones y manejo de errores.
          </p>
          <p style={techStyle}>Java · Spring Boot · MVC</p>

          <a
            href="https://github.com/Ezequielsaso/api-usuarios-spring"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            Ver en GitHub
          </a>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: "#e13838" }}>Sistema de Turnos</h3>
          <p>
            Gestión de turnos médicos por especialidad y horarios.
          </p>
          <p style={techStyle}>Java · Spring · MVC</p>

          <a

            target="_blank"
            rel="noreferrer"
            style={linkStyleProgress}

          >
            En progeso
          </a>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  backgroundColor: "#2c2c2c",
  borderRadius: "12px",
  padding: "25px",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
};

const techStyle = {
  fontSize: "13px",
  color: "#aaa",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "10px",
  color: "#0af",
  textDecoration: "none",
  fontWeight: "bold",
};

const linkStyleProgress = {
  display: "inline-block",
  marginTop: "10px",
  color: "rgb(131, 133, 133)",
  textDecoration: "none",
  fontWeight: "bold",
};
