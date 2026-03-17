import styles from "./footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.content}>
          <div className={styles.flexContainer}>
            <div className={styles.logoContainer}>
              <img src="/assets/boni-logo.png" alt="Boni AI Assistant" className={styles.logo} width={120} height={36} />
            </div>

            <div className={styles.copyright}>
              <p>&copy; 2024 Boni AI Assistant. Todos los derechos reservados.</p>
              <p className={styles.notice}>Próximamente - Enero 2028</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className={styles.devContainer}>
        <a
          href="https://interaktivesolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.devLink}
        >
          <span className={styles.devText}>Developed by INTERAKTIVE </span>
          <img
            src="https://raw.githubusercontent.com/Remojs/Interaktive_QR-Manager/refs/heads/master/frontend/assets/logo.png"
            alt="Interaktive Solutions"
            className={styles.devLogo}
          />
        </a>
      </footer>
    </>
  );
}
