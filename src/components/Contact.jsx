import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Completá todos los campos");
      return;
    }

    emailjs
      .send(
        "service_w31pjkx",
        "template_w6r0rc9",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "R95A_3sNK0HESK9i4"
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Error al enviar el mensaje, intentá nuevamente.");
      });
  }

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    backgroundColor: "#2c2c2c",
    color: "#fff",
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(54, 54, 54)",
          padding: "30px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#e13838",
            fontWeight: "bold",
          }}
        >
          Contacto
        </h2>

        {submitted && (
          <p style={{ textAlign: "center", color: "#4caf50" }}>
            Mensaje enviado correctamente
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#e13838",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#c23030")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#e13838")
            }
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
