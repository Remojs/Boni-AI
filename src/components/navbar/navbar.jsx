import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`${styles.container} ${
        scrolled ? styles.scrolled : styles.transparent
      }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.navContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <img
              src="/src/assets/boni-logo.png"
              alt="Boni AI Assistant"
              className={styles.logo}
              width={120}
              height={36}
            />
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <button
              onClick={() => scrollToSection("hero")}
              className={styles.navLink}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("integrations")}
              className={styles.navLink}
            >
              Integraciones
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={styles.navLink}
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={styles.navLink}
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("hero")}
              className={styles.waitlistButton}
            >
              Lista de Espera
            </button>
          </div>

          {/* Mobile menu button */}
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.mobileMenuButton}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileLinks}>
              <button
                onClick={() => scrollToSection("hero")}
                className={styles.mobileLinkItem}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("integrations")}
                className={styles.mobileLinkItem}
              >
                Integraciones
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className={styles.mobileLinkItem}
              >
                Precios
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={styles.mobileLinkItem}
              >
                Contacto
              </button>
              <div className={styles.mobileButtonContainer}>
                <button
                  onClick={() => scrollToSection("hero")}
                  className={styles.mobileWaitlistButton}
                >
                  Lista de Espera
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
