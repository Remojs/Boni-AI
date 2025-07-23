import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import styles from "./contact-form.module.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section id="contact" className={styles.container}>
      <div>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Tienes Preguntas?</h2>
          <p className={styles.subtitle}>
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.iconContainer}>
                <Mail className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>contacto@tuapp.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconContainer}>
                <MessageSquare className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Soporte</h3>
                <p className={styles.infoText}>Respuesta en menos de 24 horas</p>
              </div>
            </div>

            <div className={styles.callToAction}>
              <h3 className={styles.ctaTitle}>¿Quieres ser de los primeros?</h3>
              <p className={styles.ctaText}>
                Únete a nuestra lista de espera y obtén acceso anticipado a Boni cuando lancemos.
              </p>
              <button className={styles.ctaButton}>Únete Ahora</button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Envíanos un Mensaje</h3>
            </div>
            <div className={styles.formContent}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  Enviar Mensaje
                  <Send className={styles.sendIcon} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
