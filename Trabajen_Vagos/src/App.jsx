import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Enfiéstate, inicio" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">E</span>
          <span>ENFIESTATE<span className="brand-period">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
          <a href="#experiencias" onClick={closeMenu}>Experiencias</a>
          <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>Hagamos planes <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> EVENTOS CON OTRA ENERGÍA</p>
            <h1>Hay noches que se <span>quedan</span> para siempre.</h1>
            <p className="hero-description">Creamos el ambiente, tú pones el motivo. Hagamos de tu próxima celebración una historia que dé gusto contar.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#experiencias">Descubre lo que hacemos <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#nosotros">Conoce Enfiéstate <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note"><span className="note-star" aria-hidden="true">✳</span><span>Tu idea es el comienzo.<br /><strong>La celebración, lo nuestro.</strong></span></div>
          </div>

          <div className="hero-visual" role="img" aria-label="Personas celebrando bajo luces cálidas">
            <div className="hero-photo" />
            <div className="photo-shade" />
            <div className="hero-sticker"><span>GOOD<br />VIBES</span><span className="sticker-star" aria-hidden="true">✳</span></div>
            <div className="photo-caption"><span>01 / 03</span><span>Que empiece lo bueno.</span></div>
          </div>
          <span className="hero-index" aria-hidden="true">01 — ENFIESTATE</span>
        </section>

        <section className="ticker" aria-label="Nuestra filosofía">
          <div className="ticker-track"><span>CELEBRAR A TU MANERA</span><i>✳</i><span>VIVIR EL MOMENTO</span><i>✳</i><span>HACERLO INOLVIDABLE</span><i>✳</i><span>CELEBRAR A TU MANERA</span><i>✳</i></div>
        </section>

        <section className="experiences section-wrap" id="experiencias">
          <div className="section-heading">
            <div><p className="eyebrow">PARA CADA GRAN MOMENTO</p><h2>Tu ocasión.<br /><span>Nuestra energía.</span></h2></div>
            <p className="section-intro">Cada celebración tiene su propia vibra. Diseñamos experiencias alrededor de lo que quieres celebrar y cómo quieres sentirlo.</p>
          </div>

          <div className="experience-grid">
            <article className="experience-card card-party">
              <div className="experience-image image-party" role="img" aria-label="Fiesta con luces y música" />
              <div className="card-meta"><span>01 / FIESTAS</span><span aria-hidden="true">↗</span></div>
              <h3>Que nadie<br />quiera irse.</h3>
              <p>Una fiesta con tu estilo, desde la primera canción hasta el último baile.</p>
            </article>
            <article className="experience-card card-celebration">
              <div className="experience-image image-celebration" role="img" aria-label="Celebración en una mesa decorada" />
              <div className="card-meta"><span>02 / CELEBRACIONES</span><span aria-hidden="true">↗</span></div>
              <h3>Lo importante<br />merece celebrarse.</h3>
              <p>Cumpleaños, logros y esos días que merecen algo más que un brindis.</p>
            </article>
            <article className="experience-card card-custom">
              <div className="custom-art" aria-hidden="true"><span className="art-spark">✳</span><span className="art-word">TU<br />IDEA</span><span className="art-orbit" /></div>
              <div className="card-meta"><span>03 / A TU MEDIDA</span><span aria-hidden="true">↗</span></div>
              <h3>Si lo imaginas,<br />lo celebramos.</h3>
              <p>Cuéntanos qué tienes en mente. Lo hacemos realidad contigo.</p>
            </article>
          </div>
        </section>

        <section className="about-section" id="nosotros">
          <div className="about-image" role="img" aria-label="Luces de fiesta en una pista de baile"><span className="image-tag">EL MOMENTO ES AHORA <span aria-hidden="true">✳</span></span></div>
          <div className="about-copy">
            <p className="eyebrow">NO HACEMOS EVENTOS. CREAMOS RECUERDOS.</p>
            <h2>Las mejores<br />historias empiezan<br /><span>con un “¿y si…?”</span></h2>
            <p>Somos Enfiéstate. Nos mueve juntar a la gente, encontrar el detalle que cambia el ambiente y convertir cualquier motivo en una buena razón para celebrar.</p>
            <a className="text-link" href="#contacto">¿Tienes una idea? Cuéntanos <span aria-hidden="true">↗</span></a>
            <span className="about-doodle" aria-hidden="true">✳</span>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-topline"><span>EL SIGUIENTE GRAN PLAN</span><span>EMPIEZA AQUÍ <span aria-hidden="true">↘</span></span></div>
          <h2>¿Qué vamos<br />a <span>celebrar?</span></h2>
          <p>Cuéntanos tu idea y empecemos a darle forma.</p>
          <a className="button button-light" href="mailto:?subject=Quiero%20celebrar%20con%20Enfi%C3%A9state&body=Hola%2C%20quiero%20contarles%20mi%20idea%20para%20un%20evento.">Escríbenos <span aria-hidden="true">↗</span></a>
          <span className="contact-spark spark-one" aria-hidden="true">✳</span><span className="contact-spark spark-two" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark" aria-hidden="true">E</span><span>ENFIESTATE<span className="brand-period">.</span></span></a>
        <span>Buenos momentos. Buenas historias.</span>
        <a className="back-top" href="#inicio">VOLVER ARRIBA ↑</a>
        <span className="copyright">© ENFIESTATE</span>
      </footer>
    </div>
  )
}

export default App
