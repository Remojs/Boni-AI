import { Calendar, FileText, Calculator, CheckSquare, Bell, Settings } from "lucide-react";
import styles from "./next-features.module.css";

const nextFeatures = [
  {
    name: "Calendario Integrado",
    description: "Conectado con Google Calendar",
    icon: Calendar,
    details: [
      "Sincronización automática con tu Google Calendar",
      "Gestión inteligente de eventos y citas",
      "Recordatorios personalizados",
      "Vista unificada de todas tus actividades",
    ],
  },
  {
    name: "App de Notas",
    description: "Con nodos relacionales estilo Obsidian",
    icon: FileText,
    details: [
      "Sistema de notas interconectadas",
      "Visualización de grafos de conocimiento",
      "Etiquetas y categorías inteligentes",
      "Búsqueda semántica avanzada",
    ],
  },
  {
    name: "Gestión de Gastos",
    description: "Con export a múltiples formatos",
    icon: Calculator,
    details: [
      "Seguimiento automático de gastos",
      "Categorización inteligente",
      "Exportar a Excel, PDF, CSV",
      "Reportes y análisis de tendencias",
    ],
  },
  {
    name: "Tablero de Tareas",
    description: "Con trackers, pomodoro y categorías",
    icon: CheckSquare,
    details: [
      "Gestión avanzada de tareas",
      "Timer Pomodoro integrado",
      "Tableros Kanban personalizables",
      "Tracking de productividad",
    ],
  },
  {
    name: "Gestión de Recordatorios",
    description: "Vía WhatsApp, Slack y otros canales",
    icon: Bell,
    details: [
      "Recordatorios por WhatsApp",
      "Integración con Slack y Teams",
      "Notificaciones inteligentes",
      "Múltiples canales de comunicación",
    ],
  },
  {
    name: "Presets de BONI",
    description: "Acciones rápidas con un solo botón",
    icon: Settings,
    details: [
      "Comandos predefinidos personalizables",
      "Acceso rápido a funciones comunes",
      "Automatización de tareas repetitivas",
      "Configuración personalizada por usuario",
    ],
  },
];

export function NextFeaturesSection() {
  return (
    <section id="next-features" className={styles.container}>
      <div>
        <div className={styles.header}>
          <h2 className={styles.title}>Próximas Características</h2>
          <p className={styles.subtitle}>
            No todo es IA y BONI lo sabe, por eso estamos trabajando en un stack de herramientas propio para organizarte con BONI
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {nextFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.name} className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <div className={styles.iconContainer}>
                    <IconComponent className={styles.featureIcon} />
                  </div>
                  <h3 className={styles.featureName}>{feature.name}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>

                <div className={styles.featureContent}>
                  <ul className={styles.detailsList}>
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className={styles.detailItem}>
                        <span className={styles.detailText}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
