import './globals.css'
import styles from './App.module.css'
import { Hero } from "./components/hero/hero"
import { IntegrationsSection } from "./components/integrations-section/integrations-section"
import { ContactForm } from "./components/contact-form/contact-form"
import { PricingSection } from "./components/pricing-section/pricing-section"
import { Footer } from "./components/footer/footer"
import { Navbar } from "./components/navbar/navbar"

function App() {
  return (
    <main className={styles.app}>
      <Navbar />
      <div className={styles.backgroundWrapper}>
        <Hero />
        <IntegrationsSection />
        <PricingSection />
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}

export default App

