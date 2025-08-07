import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./hero.module.css";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-01-01T12:00:00").getTime();
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={styles.container}>
      {/* Animated background elements - estos se agregarían con elementos absolutos en CSS */}
      
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* Logo and heading with animation */}
          <div className={styles.logoSection}>
            <div className={styles.comingSoon}>
              <Sparkles className={styles.sparklesIcon} />
              <span>Próximamente</span>
            </div>

            {/* Main Logo */}
            <div className={styles.logoContainer}>
              <img 
                src="/assets/boni-logo.png" 
                alt="Boni AI Assistant"
                className={styles.logo}
              />
            </div>

            <h1 className={styles.title}>
              Tu Asistente de IA
              <span>
                Todo en Uno
              </span>
            </h1>

            <p className={styles.subtitle}>
              La revolución de la inteligencia artificial llega a tus manos. Una sola app, infinitas posibilidades.
            </p>
          </div>

          {/* Quote */}
          <div className={styles.quoteContainer}>
            <p className={styles.quote}>"Si JARVIS existiera, usaría a Boni."</p>
          </div>

          {/* Countdown Timer */}
          <div className={styles.countdownContainer}>
            <h2 className={styles.countdownHeading}>Lanzamiento en:</h2>
            <div className={styles.countdownGrid}>
              <div className={styles.countdownItem}>
                <div className={styles.countdownNumber}>
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className={styles.countdownLabel}>DÍAS</div>
              </div>
              <div className={styles.countdownItem}>
                <div className={styles.countdownNumber}>
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className={styles.countdownLabel}>HORAS</div>
              </div>
              <div className={styles.countdownItem}>
                <div className={styles.countdownNumber}>
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className={styles.countdownLabel}>MIN</div>
              </div>
              <div className={styles.countdownItem}>
                <div className={styles.countdownNumber}>
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className={styles.countdownLabel}>SEG</div>
              </div>
            </div>
            <div className={styles.timeRemaining}>
              Tiempo restante hasta el 1 de enero de 2026 a las 12:00 hs
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.cta}>
            <button className={styles.primaryButton}>
              Únete a la Lista de Espera
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className={styles.secondaryButton}>
              Ver Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
