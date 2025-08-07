import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.flexContainer}>
          <div className={styles.logoContainer}>
            <img src="/assets/boni-logo.png" alt="Boni AI Assistant" className={styles.logo} width={120} height={36} />
          </div>

          <div className={styles.copyright}>
            <p>&copy; 2024 Boni AI Assistant. Todos los derechos reservados.</p>
            <p className={styles.notice}>Próximamente - Enero 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
