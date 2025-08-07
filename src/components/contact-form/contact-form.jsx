import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import styles from "./contact-form.module.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuración de EmailJS usando variables de entorno
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_boni_contact';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_boni_form';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey.substring(0, 5) + '...' });

      // Verificar que las variables estén configuradas
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'service_boni_contact' || 
          templateId === 'template_boni_form' || 
          publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS no está configurado correctamente');
      }

      // Parámetros del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'boniassistant@gmail.com',
        message: formData.message,
        reply_to: formData.email,
      };

      console.log('Enviando email con parámetros:', templateParams);

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email enviado exitosamente:', response);
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
    } catch (error) {
      console.error('Error enviando email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                <p className={styles.infoText}>boniassistant@gmail.com</p>
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  <Send className={styles.sendIcon} />
                </button>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    ¡Mensaje enviado correctamente! Te responderemos pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Error al enviar el mensaje. Por favor, intenta nuevamente o envía un email directamente a boniassistant@gmail.com
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
