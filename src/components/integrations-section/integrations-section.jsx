import { useState } from "react";
import { Zap } from "lucide-react";
import styles from "./integrations-section.module.css";

const integrations = [
  { name: "WhatsApp Bussiness", color: "#5C7C89" },
  { name: "Twilio", color: "#5C7C89" },
  { name: "Telegram", color: "#5C7C89" },
  { name: "Slack", color: "#5C7C89" },
  { name: "Discord", color: "#5C7C89" },
  { name: "Gmail", color: "#5C7C89" },
  { name: "Outlook", color: "#5C7C89" },
  { name: "Linkedin", color: "#5C7C89" },
  { name: "Trello", color: "#5C7C89" },
  { name: "Asana", color: "#5C7C89" },
  { name: "Jira", color: "#5C7C89" },
  { name: "ClickUp", color: "#5C7C89" },
  { name: "Airtable", color: "#5C7C89" },
  { name: "Google Calendar", color: "#5C7C89" },
  { name: "Microsoft To Do", color: "#5C7C89" },
  { name: "Todoist", color: "#5C7C89" },
  { name: "Notion", color: "#5C7C89" },
  { name: "Clockify", color: "#5C7C89" },
  { name: "Wolfram Alpha", color: "#5C7C89" },
  { name: "Wikipedia", color: "#5C7C89" },
  { name: "Github", color: "#5C7C89" },
  { name: "Gitlab", color: "#5C7C89" },
  { name: "CircleCI", color: "#5C7C89" },
  { name: "Dropbox", color: "#5C7C89" },
  { name: "Google Drive", color: "#5C7C89" },
  { name: "Deepl Translate", color: "#5C7C89" },
  { name: "Google Translate", color: "#5C7C89" },
  { name: "Open Weather Map", color: "#5C7C89" },
  { name: "Zoom", color: "#5C7C89" },
  { name: "Youtube", color: "#5C7C89" },
  { name: "Mailchimp", color: "#5C7C89" },
  { name: "Google Analytics", color: "#5C7C89" },
  { name: "Google Ads", color: "#5C7C89" },
  { name: "Google Sheets", color: "#5C7C89" },
  { name: "Microsoft Excel", color: "#5C7C89" },
  { name: "Google Tasks", color: "#5C7C89" },
  { name: "Microsoft One Drive", color: "#5C7C89" },
  { name: "Microsoft Teams", color: "#5C7C89" },
];

export function IntegrationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="integrations" className={styles.container}>
      <div>
        <div className={styles.header}>
          <h2 className={styles.title}>Integración con Todo lo que Usas</h2>
          <p className={styles.subtitle}>
            Conecta Boni con todas tus aplicaciones favoritas. Un ecosistema completo de herramientas trabajando en
            armonía.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Panel Izquierdo - Estadísticas y Info */}
          <div className={styles.leftPanel}>
            <div>
              <div className={styles.badgeContainer}>
                <Zap className={styles.badgeIcon} />
                <span className={styles.badgeText}>Ecosistema Completo</span>
              </div>

              <h3 className={styles.heading}>
                Todas tus herramientas,{" "}
                <span className={styles.gradientText}>
                  una sola IA
                </span>
              </h3>

              <p className={styles.description}>
                Boni se integra perfectamente con las aplicaciones que ya usas todos los días. No necesitas cambiar tu
                flujo de trabajo, solo mejorarlo.
              </p>
            </div>

            {/* Estadísticas */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>30+</div>
                <div className={styles.statLabel}>Integraciones Activas</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>10</div>
                <div className={styles.statLabel}>Categorías</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Sincronización</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>∞</div>
                <div className={styles.statLabel}>Posibilidades</div>
              </div>
            </div>

            {/* Características adicionales */}
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureDot}></div>
                <span className={styles.featureText}>Sincronización automática en tiempo real</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureDot}></div>
                <span className={styles.featureText}>API unificada para todas las plataformas</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureDot}></div>
                <span className={styles.featureText}>Configuración sin código requerido</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureDot}></div>
                <span className={styles.featureText}>Seguridad empresarial garantizada</span>
              </div>
            </div>
          </div>

          {/* Panel Derecho - Grid de Integraciones */}
          <div className={styles.integrationsContainer}>
            <div className={styles.integrationsGrid}>
              <div className={styles.iconsGrid}>
                {integrations.map((integration, index) => {
                  const isHovered = hoveredIndex === index;
                  // Formatear el nombre para el archivo de imagen
                  const imageName = integration.name.replace(/\s+/g, '%20');

                  return (
                    <div
                      key={integration.name}
                      className={styles.iconContainer}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className={styles.iconBox}>
                        <img 
                          src={`/assets/tools/${imageName}.png`} 
                          alt={integration.name}
                          className={styles.integrationIcon} 
                        />

                        {/* Efecto de brillo */}
                        {isHovered && (
                          <div className={styles.glowEffect} />
                        )}
                      </div>

                      {/* Tooltip */}
                      <div className={styles.tooltip}>
                        {integration.name}
                        <div className={styles.tooltipArrow} />
                      </div>

                      {/* Ondas de hover */}
                      {isHovered && (
                        <div className={styles.hoverRing}>
                          <div className={styles.pingEffect} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
