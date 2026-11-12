import { useEffect, useRef, useState } from 'react'
import './App.css'
import ParticleField from './ParticleField'
import { useActiveSection, useCountUp, useInView, useTypewriter } from './hooks'
import {
  education,
  experience,
  profile,
  research,
  sectionIds,
  sections,
  skills,
} from './data'
import photoSrc from './assets/photo.jpg'

const YEAR = new Date().getFullYear()

/* ---------- small building blocks ---------- */

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView(0.12)
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SectionHeading({ index, title }) {
  return (
    <Reveal>
      <div className="section-heading">
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
        <span className="section-line" />
      </div>
    </Reveal>
  )
}

// Card that tilts toward the cursor and shows a soft spotlight.
function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--rx', `${(0.5 - y) * 6}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 6}deg`)
    el.style.setProperty('--px', `${x * 100}%`)
    el.style.setProperty('--py', `${y * 100}%`)
  }

  const onLeave = () => {
    const el = ref.current
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}

function Stat({ value, label, run }) {
  const count = useCountUp(value, run)
  return (
    <div className="stat">
      <span className="stat-value">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

/* ---------- layout pieces ---------- */

function Navbar({ active }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={() => setOpen(false)}>
        <span>KA</span>
      </a>
      <button
        className={`menu-toggle ${open ? 'open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

/* ---------- company / research logos ---------- */

function CompanyLogo({ logoSrc, logoKey, company }) {
  // If an imported image source is provided, render the image
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={company}
        className="company-logo-img"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    )
  }

  if (logoKey === 'research') {
    // Flask / science icon
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label="Research">
        <path d="M9 3h6" />
        <path d="M9 3v5.5L5.5 15A4 4 0 0 0 9 21h6a4 4 0 0 0 3.5-6L15 8.5V3" />
        <circle cx="9.5" cy="16" r="0.8" fill="#22d3ee" stroke="none" />
        <circle cx="13" cy="14" r="0.6" fill="#22d3ee" stroke="none" />
        <circle cx="11" cy="17.5" r="0.5" fill="#22d3ee" stroke="none" />
      </svg>
    )
  }

  return null
}

function Hero() {
  const typed = useTypewriter(profile.roles)
  const letters = profile.name.split('')

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="pulse-dot" /> Hello, I&apos;m
        </p>
        <h1 aria-label={profile.name}>
          {letters.map((ch, i) => (
            <span
              key={i}
              className={`letter ${ch === ' ' ? 'space' : ''}`}
              style={{ animationDelay: `${0.25 + i * 0.045}s` }}
              aria-hidden="true"
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h1>
        <p className="typed-line">
          <span className="gradient-text">{typed}</span>
          <span className="caret" />
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#experience" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub &#x2197;
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn &#x2197;
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />

        <div className="dual-visual">
          <div className="photo-frame dual-photo">
            <img src={photoSrc} alt="Ken Aguilar" className="hero-photo" />
          </div>
          <div className="code-window dual-code">
            <div className="code-bar">
              <i />
              <i />
              <i />
              <span>ken.js</span>
            </div>
            <pre>
              <code>
                <span className="c-k">const</span> <span className="c-v">ken</span> = {'{'}
                {'\n'}  <span className="c-p">degree</span>: <span className="c-s">&quot;BS Computer Science&quot;</span>,
                {'\n'}  <span className="c-p">school</span>: <span className="c-s">&quot;UST&quot;</span>,
                {'\n'}  <span className="c-p">focus</span>: [<span className="c-s">&quot;Data Science&quot;</span>,
                {'\n'}           <span className="c-s">&quot;Web Dev&quot;</span>],
                {'\n'}  <span className="c-p">dashboards</span>: <span className="c-s">&quot;Power BI&quot;</span>,
                {'\n'}  <span className="c-p">frontend</span>: <span className="c-s">&quot;React&quot;</span>,
                {'\n'}  <span className="c-p">research</span>: <span className="c-s">&quot;ELM-SVM&quot;</span>,
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}

function About() {
  const [ref, inView] = useInView(0.3)
  const toolCount = skills.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <section id="about" className="section">
      <SectionHeading index="01" title="About me" />
      <div className="about-grid">
        <Reveal className="about-text">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={150}>
          <div className="stats" ref={ref}>
            <Stat value={experience.length} label="Work experiences" run={inView} />
            <Stat value={1} label="Research project" run={inView} />
            <Stat value={toolCount} label="Tools & languages" run={inView} />
            <Stat value={4} label="Years studying CS" run={inView} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  const all = skills.flatMap((g) => g.items)
  const track = [...all, ...all]

  return (
    <section id="skills" className="section">
      <SectionHeading index="02" title="Skills" />
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 120}>
            <TiltCard className="skill-card">
              <div className="skill-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {track.map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="03" title="Work experience" />
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 120} className="timeline-item">
            <span className="timeline-dot" />
            <TiltCard className="job-card">
              {/* NEW: Wrapper for the header section */}
              <div className="job-header-banner">
                
                {/* Background Watermark Logo */}
                {(job.logoSrc || job.logoKey) && (
                  <div 
                    className="job-bg-logo" 
                    aria-hidden="true"
                    /* THIS IS THE NEW LINE: Applies the color from data.js */
                    style={{ backgroundColor: job.brandColor }} 
                  >
                    <CompanyLogo logoSrc={job.logoSrc} logoKey={job.logoKey} company={job.company} />
                  </div>
                )}

                {/* Foreground Text */}
                <div className="job-top">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">
                      {job.company}
                      {job.location && <span> &middot; {job.location}</span>}
                    </p>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <p className="job-team">{job.team}</p>
                
              </div>

              <ul className="bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="chips small">
                {job.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Research() {
  return (
    <section id="research" className="section">
      <SectionHeading index="04" title="Research & publications" />
      <Reveal>
        <div className="glow-border">
          <TiltCard className="research-card">
            <div className="job-top">
              <div className="job-info">
                <div className="job-logo">
                  <CompanyLogo logoKey="research" company="Research" />
                </div>
                <div>
                  <h3>{research.title}</h3>
                  <p className="job-company">{research.subtitle}</p>
                </div>
              </div>
              <span className="period">{research.period}</span>
            </div>
            <p className="job-team">{research.role}</p>
            <ul className="bullets">
              {research.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <ul className="chips small">
              {research.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </TiltCard>
        </div>
      </Reveal>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading index="05" title="Education" />
      <Reveal>
        <TiltCard className="edu-card">
          <div className="job-top">
            <div>
              <h3>{education.school}</h3>
              <p className="job-company">{education.degree}</p>
            </div>
            <span className="period">{education.period}</span>
          </div>
          <p className="job-team">
            Specialization: {education.specialization} &middot; {education.location}
          </p>
          <p className="coursework-label">Relevant coursework</p>
          <ul className="chips small">
            {education.coursework.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>
        </TiltCard>
      </Reveal>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact">
      <SectionHeading index="06" title="Contact" />
      <Reveal>
        <p className="contact-lead">
          Have a project, a job offer, or a data problem to solve?{' '}
          <span className="gradient-text">Let&apos;s talk.</span>
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <button className="btn btn-ghost" onClick={copyEmail}>
            {copied ? 'Copied \u2713' : profile.email}
          </button>
        </div>
        <div className="hero-socials center">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub &#x2197;
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn &#x2197;
          </a>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- app ---------- */

export default function App() {
  const active = useActiveSection(sectionIds)
  const progressRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      if (progressRef.current) progressRef.current.style.width = `${pct}%`
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className="progress" ref={progressRef} />
      <div className="cursor-glow" aria-hidden="true" />
      <ParticleField />
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Research />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          &copy; {YEAR} {profile.name}
        </p>
      </footer>
    </>
  )
}