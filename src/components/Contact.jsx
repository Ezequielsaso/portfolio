
import { useState } from "react";
import emailjs from "emailjs-com";
import "../contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_w31pjkx",
        "template_w6r0rc9",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "R95A_3sNK0HESK9i4"
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-eyebrow">HABLEMOS</p>

          <h2>
            ¿Trabajamos
            <span> juntos?</span>
          </h2>

          <p className="contact-description">
            Estoy buscando mi primera oportunidad profesional como
            desarrollador Java Backend. Si tenés una propuesta
            laboral o querés conocer más sobre mis proyectos, podés
            escribirme desde este formulario.
          </p>

          <div className="contact-note">
            <span className="contact-note-dot"></span>
            Disponible para oportunidades laborales
          </div>
        </div>

        <div className="contact-card">
          <h3>Enviame un mensaje</h3>

          <p className="contact-card-description">
            Completá los campos y me pondré en contacto con vos.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Nombre</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                maxLength={100}
                required
                disabled={isSending}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Correo electrónico</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                maxLength={254}
                required
                disabled={isSending}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Contame en qué puedo ayudarte..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={3000}
                required
                disabled={isSending}
              />
            </div>

            <button
              className="contact-submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>

            <p
              className={`contact-status ${
                status === "success"
                  ? "contact-status-success"
                  : status === "error"
                    ? "contact-status-error"
                    : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {status === "success" &&
                "Mensaje enviado correctamente. ¡Gracias por escribirme!"}

              {status === "error" &&
                "No se pudo enviar el mensaje. Intentá nuevamente."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
