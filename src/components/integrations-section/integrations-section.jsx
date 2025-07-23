import { useState } from "react";
import {
  MessageSquare,
  ImageIcon,
  FileText,
  Music,
  Video,
  Code,
  Calculator,
  Globe,
  Mail,
  Calendar,
  Camera,
  Headphones,
  Cloud,
  Zap,
  Database,
} from "lucide-react";
import styles from "./integrations-section.module.css";

const integrations = [
  { icon: MessageSquare, name: "WhatsApp", color: "#5C7C89" },
  { icon: Mail, name: "Gmail", color: "#5C7C89" },
  { icon: FileText, name: "Google Docs", color: "#5C7C89" },
  { icon: Calendar, name: "Calendar", color: "#5C7C89" },
  { icon: Video, name: "Zoom", color: "#5C7C89" },
  { icon: Code, name: "GitHub", color: "#5C7C89" },
  { icon: ImageIcon, name: "Figma", color: "#5C7C89" },
  { icon: Music, name: "Spotify", color: "#5C7C89" },
  { icon: Globe, name: "Chrome", color: "#5C7C89" },
  { icon: MessageSquare, name: "Slack", color: "#5C7C89" },
  { icon: Video, name: "YouTube", color: "#5C7C89" },
  { icon: FileText, name: "Notion", color: "#5C7C89" },
  { icon: Camera, name: "Photoshop", color: "#5C7C89" },
  { icon: Calculator, name: "Excel", color: "#5C7C89" },
  { icon: Headphones, name: "Discord", color: "#5C7C89" },
  { icon: ImageIcon, name: "Instagram", color: "#5C7C89" },
  { icon: Code, name: "VS Code", color: "#5C7C89" },
  { icon: Cloud, name: "Dropbox", color: "#5C7C89" },
  { icon: Mail, name: "Outlook", color: "#5C7C89" },
  { icon: Video, name: "Teams", color: "#5C7C89" },
  { icon: MessageSquare, name: "Telegram", color: "#5C7C89" },
  { icon: Music, name: "Apple Music", color: "#5C7C89" },
  { icon: Globe, name: "Safari", color: "#5C7C89" },
  { icon: FileText, name: "Trello", color: "#5C7C89" },
  { icon: ImageIcon, name: "Canva", color: "#5C7C89" },
  { icon: Code, name: "Replit", color: "#5C7C89" },
  { icon: Music, name: "SoundCloud", color: "#5C7C89" },
  { icon: Mail, name: "Mailchimp", color: "#5C7C89" },
  { icon: Calculator, name: "Sheets", color: "#5C7C89" },
  { icon: Camera, name: "Lightroom", color: "#5C7C89" },
  { icon: Video, name: "Loom", color: "#5C7C89" },
  { icon: MessageSquare, name: "Twitter", color: "#5C7C89" },
  { icon: Database, name: "Airtable", color: "#5C7C89" },
  { icon: Music, name: "Audacity", color: "#5C7C89" },
  { icon: ImageIcon, name: "Sketch", color: "#5C7C89" },
  { icon: Code, name: "CodePen", color: "#5C7C89" },
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
                <div className={styles.statValue}>36+</div>
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
                  const Icon = integration.icon;
                  const isHovered = hoveredIndex === index;

                  return (
                    <div
                      key={integration.name}
                      className={styles.iconContainer}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className={styles.iconBox}>
                        <Icon className={styles.integrationIcon} />

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
