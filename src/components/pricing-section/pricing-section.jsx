import { Check, Star } from "lucide-react";
import styles from "./pricing-section.module.css";

const plans = [
  {
    name: "Básico",
    description: "Perfecto para uso personal",
    price: "$10",
    monthlyQueries: "3,000 consultas mensuales",
    features: [
      "Acceso a todas las integraciones",
      "3,000 consultas mensuales",
      "Soporte por email",
      "Historial de 30 días",
      "Respuestas rápidas",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "Ideal para profesionales y equipos",
    price: "$20",
    monthlyQueries: "9,000 consultas mensuales",
    features: [
      "Acceso a todas las integraciones",
      "9,000 consultas mensuales",
      "Soporte prioritario 24/7",
      "Historial completo",
      "API personalizada",
      "Análisis avanzados",
      "Respuestas premium",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Para empresas y organizaciones",
    price: "Consultar",
    monthlyQueries: "Consultas personalizables",
    features: [
      "Cantidad de consultas personalizables",
      "Gestión de cuentas de empleados",
      "Soporte prioritario dedicado",
      "Consulta trimestral de próximas integraciones",
      "Métricas de uso detalladas",
      "Early access a funciones nuevas",
      "API empresarial",
      "SLA garantizado",
      "Implementación personalizada",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className={styles.container}>
      <div>
        <div className={styles.header}>
          <h2 className={styles.title}>Planes que se Adaptan a Ti</h2>
          <p className={styles.subtitle}>
            Elige el plan perfecto para tus necesidades. Precios competitivos próximamente.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popularCard : ""}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <Star className={styles.badgeIcon} />
                  Más Popular
                </div>
              )}

              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.planPrice}>{plan.price}</div>
                <div className={styles.planQueries}>{plan.monthlyQueries}</div>
              </div>

              <div className={styles.cardContent}>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <Check className={styles.checkIcon} />
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles.button} ${
                    plan.popular ? styles.primaryButton : styles.secondaryButton
                  }`}
                >
                  Únete a la Lista de Espera
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
