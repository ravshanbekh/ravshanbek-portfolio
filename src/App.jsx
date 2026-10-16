import { useEffect, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, BookOpen, BrainCircuit,
  Check, CloudCog, Code2, Copy, Database, FolderCode,
  GitFork, Mail, Menu, MessageCircle, Phone, Send, ShieldCheck, Sparkles,
  Terminal, X,
} from 'lucide-react'
import { profile, navigation, stack, metrics, skills, experience, projects } from './content.js'
import { createMailto } from './contact.js'

const skillIcons = { code: Code2, brain: BrainCircuit, database: Database, cloud: CloudCog }

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">[ {number} // {eyebrow} ]</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Header({ active }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <a className="skip-link" href="#main">Asosiy tarkibga o‘tish</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#hero" aria-label="Bosh sahifaga o‘tish" onClick={() => setMenuOpen(false)}>
            <img src={profile.logo} alt="" width="36" height="36" />
            <span><strong>{profile.name}</strong><small>Backend & AI Mentor</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
            {navigation.map((item) => <a key={item.id} className={active === item.id ? 'active' : ''} href={`#${item.id}`}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <span className="availability header-availability"><span className="status-dot" />Hamkorlik uchun ochiq</span>
            <a className="button button-primary header-contact" href="#contact">Bog‘lanish</a>
            <button className="icon-button mobile-menu-button" type="button" aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobil navigatsiya" inert={!menuOpen}>
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
      </header>
    </>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero section-anchor">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <span className="availability mobile-hero-availability"><span className="status-dot" />Loyihalar va hamkorlik uchun ochiq</span>
        <div className="hero-copy">
          <span className="availability"><span className="status-dot" />Loyihalar va hamkorlik uchun ochiq</span>
          <div>
            <span className="eyebrow">Salom, men</span>
            <h1>Isroilov <span>Ravshanbek</span></h1>
            <p className="hero-role">{profile.headline}</p>
          </div>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Loyihalarimni ko‘rish <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#contact"><Mail size={17} /> Bog‘lanish</a>
          </div>
          <div className="stack-area">
            <span className="minor-label">Asosiy texnologik stek:</span>
            <div className="tags">{stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          </div>
        </div>
        <div className="portrait-shell">
          <div className="portrait-card">
            <div className="terminal-bar"><span className="window-dots"><i /><i /><i /></span><span><Terminal size={13} /> isroilov.sh</span></div>
            <img src={profile.portrait} alt="Ravshanbek portfolio maketidagi portret" className="portrait" width="600" height="600" fetchPriority="high" />
            <div className="portrait-overlay">
              <span><ShieldCheck size={18} /><strong>5+ yillik</strong><small>Muhandislik tajribasi</small></span>
              <span><BookOpen size={18} /><strong>150+ bitiruvchi</strong><small>AI & Backend mentorlik</small></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section section-alt section-anchor">
      <div className="container">
        <SectionHeading number="01" eyebrow="MEN HAQIMDA" title="Murakkab muammolarga ishonchli arxitektura va sun’iy intellekt yechimlari" />
        <div className="about-grid">
          <div className="about-copy">
            <article className="panel narrative"><h3><Database size={19} /> Backend & yuqori yuklamali tizimlar</h3><p>Backend arxitekturasi, ma’lumotlar bazalarini optimallashtirish va sun’iy intellekt modellarini biznes jarayonlariga integratsiya qilishga ixtisoslashganman. Ishlab chiqarish muhitida toza kod, barqarorlik va xavfsizlikka tayangan holda ishlayman.</p></article>
            <article className="panel narrative"><h3><BrainCircuit size={19} /> Sun’iy intellekt va murabbiylik</h3><p>Yoshlarga real loyihalar orqali amaliy bilim beraman. O‘quv jarayonida ishlab chiqarish darajasidagi arxitektura, LLM agentlari, RAG tizimlari va test bilan qamrab olingan kod yozishni o‘rgataman.</p></article>
          </div>
          <div className="metric-grid">{metrics.map((metric) => <div className="metric panel" key={metric.label}><span className="minor-label">{metric.label}</span><div><strong className={`accent-${metric.accent}`}>{metric.value}</strong><small>{metric.note}</small></div></div>)}</div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-anchor">
      <div className="container">
        <SectionHeading number="02" eyebrow="TEXNOLOGIK IMKONIYATLAR" title="Ko‘nikmalar va texnologiyalar" description="Barqaror tizimlar va aqlli tahlil mexanizmlarini yaratish uchun ishlatadigan vositalarim." />
        <div className="skill-grid">{skills.map((skill) => { const Icon = skillIcons[skill.icon]; return <article className="panel skill-card" key={skill.title}><div className="skill-top"><span className="skill-icon"><Icon size={20} /></span><span className="minor-label">{skill.eyebrow}</span></div><h3>{skill.title}</h3><p>{skill.description}</p><div className="tags">{skill.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article> })}</div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section section-alt section-anchor">
      <div className="container">
        <SectionHeading number="03" eyebrow="AMALIY YO‘L" title="Ish tajribasi & faoliyat" description="Murakkab masalalarni tizimli hal qilish va jamoalar bilan ishlash bo‘yicha yo‘lim." />
        <div className="timeline">{experience.map((entry) => <article className="timeline-item" key={entry.period + entry.title}><div className="timeline-node" /><div className="panel experience-card"><div className="card-meta"><span>{entry.period}</span><span className="pill">{entry.type}</span></div><h3>{entry.title}</h3><strong className="workplace">{entry.place}</strong><p>{entry.description}</p></div></article>)}</div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section section-anchor">
      <div className="container">
        <SectionHeading number="04" eyebrow="ISH MAHSULLARI" title="Tanlangan loyihalar" description="Backend va AI yo‘nalishidagi tanlangan ishlarim." />
        <div className="projects-grid">{projects.map((project) => <article className="panel project-card" key={project.code}><div className="project-meta"><span>{project.code}</span><span>{project.metric}</span></div><div className="project-body"><span className="minor-label">{project.role}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div><a href={`#contact`} className="project-link">Loyiha haqida so‘rash <ArrowUpRight size={16} /></a></article>)}</div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    window.location.href = createMailto(Object.fromEntries(data))
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section section-alt section-anchor">
      <div className="container">
        <SectionHeading number="05" eyebrow="ALOQA VA HAMKORLIK" title="Yangi loyiha yoki maslahat bormi? Keling, bog‘lanamiz!" description="Backend, sun’iy intellekt yoki mentorlik bo‘yicha taklifingizni yuboring." />
        <div className="contact-grid">
          <div className="contact-links">
            <div className="panel contact-link"><Mail size={21} /><div><span className="minor-label">Elektron pochta</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><button className="icon-button" type="button" onClick={copyEmail} aria-label="Emailni nusxalash">{copied ? <Check size={18} /> : <Copy size={18} />}</button></div>
            <a className="panel contact-link" href={`tel:${profile.phone}`}><Phone size={21} /><div><span className="minor-label">Telefon</span><strong>{profile.phoneLabel}</strong></div><ArrowUpRight size={18} /></a>
            <a className="panel contact-link" href={profile.telegram} target="_blank" rel="noopener noreferrer"><Send size={21} /><div><span className="minor-label">Telegram</span><strong>{profile.telegramLabel}</strong></div><ArrowUpRight size={18} /></a>
            <a className="panel contact-link" href={profile.github} target="_blank" rel="noopener noreferrer"><GitFork size={21} /><div><span className="minor-label">GitHub</span><strong>/ravshanbekh</strong></div><ArrowUpRight size={18} /></a>
          </div>
          <div className="panel contact-form-shell">
            <div className="form-terminal"><span className="window-dots"><i /><i /><i /></span><span>isroilov@system:~$ send-message</span></div>
            <form onSubmit={handleSubmit} className="contact-form">
              <p className="form-help">Shakl email ilovangizda tayyor xat ochadi. Xatni u yerdan yuborasiz.</p>
              <div className="form-row"><label>Ismingiz *<input name="name" required maxLength="100" placeholder="Ismingiz" autoComplete="name" /></label><label>Email yoki Telegram *<input name="replyTo" required maxLength="150" placeholder="@username yoki email" autoComplete="email" /></label></div>
              <label>Mavzu<input name="subject" maxLength="150" placeholder="Loyiha / mentorlik / maslahat" /></label>
              <label>Xabar matni *<textarea name="message" required minLength="10" maxLength="3000" rows="5" placeholder="Loyihangiz yoki savolingiz haqida yozing..." /></label>
              <button type="submit" className="button button-primary">Email xatini tayyorlash <Send size={17} /></button>
              {submitted && <p className="form-status" role="status">Email ilovangizda tayyor xat ochildi. Iltimos, yuborishni o‘sha yerda tasdiqlang.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><div><strong>{profile.name}</strong><span>© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</span></div><nav aria-label="Pastki navigatsiya">{navigation.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</nav><div className="footer-social"><a href={profile.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram"><Send size={17} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitFork size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a></div></div></footer>
}

function MobileDock({ active }) {
  const items = [
    { id: 'hero', label: 'Bosh', Icon: Terminal },
    { id: 'about', label: 'Haqimda', Icon: BookOpen },
    { id: 'skills', label: 'Ko‘nikma', Icon: Sparkles },
    { id: 'projects', label: 'Loyihalar', Icon: FolderCode },
    { id: 'contact', label: 'Bog‘lanish', Icon: MessageCircle },
  ]
  return <nav className="mobile-dock" aria-label="Tezkor navigatsiya">{items.map(({ id, label, Icon }) => <a href={`#${id}`} className={active === id ? 'active' : ''} key={id}><Icon size={19} /><span>{label}</span></a>)}</nav>
}

export default function App() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section-anchor'))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <><Header active={active} /><main id="main"><Hero /><About /><Skills /><Experience /><Projects /><Contact /></main><Footer /><MobileDock active={active} /></>
}
