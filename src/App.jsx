import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Layout, Server, Database, Brain, Users, Github, Linkedin, Mail, Download, Menu, X, Copy, Check, ExternalLink, Award, GraduationCap, MapPin, ArrowDown } from 'lucide-react'
import { site, nav, skills, training, certificates, achievements, education } from './data/site.js'
import { projects } from './data/projects.js'

const icons = { Code2, Layout, Server, Database, Brain, Users }

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <h2 id={`${id}-h`} className="h2">{title}</h2>
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

function Tag({ children }) { return <li className="tag">{children}</li> }

function LinkBtn({ href, icon: Icon, children, label }) {
  if (!href) return <span className="btn btn-off" aria-disabled="true" title="Link not added yet"><Icon size={16} />{label}</span>
  return <a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer"><Icon size={16} />{children}</a>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="mark" aria-label="Shubham Jangir, home">SHUBHAM JANGIR</a>
        <nav aria-label="Primary" className={open ? 'links open' : 'links'}>
          {nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn btn-solid sm" href={site.resume} download onClick={() => setOpen(false)}><Download size={15} />Resume</a>
        </nav>
        <button className="burger" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>
  )
}

function Hero() {
  const reduce = useReducedMotion()
  const a = (d) => reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: 'easeOut' } }
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div>
          <motion.p className="hello" {...a(0)}>Hi, I'm</motion.p>
          <motion.h1 {...a(0.08)}>Shubham Jangir</motion.h1>
          <motion.p className="tagline" {...a(0.16)}>Building Digital Experiences Through Code.</motion.p>
          <motion.p className="lead" {...a(0.24)}>I'm a Computer Science Engineering student passionate about web development, interactive applications, and machine learning. I enjoy turning ideas into practical digital solutions.</motion.p>
          <motion.p className="meta" {...a(0.3)}>B.Tech CSE at {site.university}</motion.p>
          <motion.div className="cta" {...a(0.36)}>
            <a className="btn btn-solid" href="#projects"><ArrowDown size={16} />View My Projects</a>
            <a className="btn btn-ghost" href="#contact"><Mail size={16} />Contact Me</a>
          </motion.div>
          <motion.div className="social" {...a(0.42)}>
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
          </motion.div>
        </div>
        <motion.div className="portrait" {...(reduce ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7, delay: 0.2 } })}>
          <img src={site.photo} alt="Portrait of Shubham Jangir in a dark suit" width="630" height="896" fetchPriority="high" />
          <div className="code-chip" aria-hidden="true">
            <span className="k">const</span> shubham = {'{'}<br />
            &nbsp;&nbsp;focus: <span className="s">'web + ML'</span>,<br />
            &nbsp;&nbsp;stack: <span className="s">'MERN'</span>,<br />
            &nbsp;&nbsp;learning: <span className="s">true</span><br />{'}'}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About me">
      <div className="about">
        <p>I'm a B.Tech student in Computer Science and Engineering at Lovely Professional University, where I started in August 2024. I enjoy building things that people can actually use, and I learn best by shipping small, complete projects.</p>
        <p>So far that includes a full-stack event booking platform with seat selection and an admin dashboard, and a machine-learning model that predicts used-car prices. I'm now looking for internship opportunities where I can keep growing as a software developer on real, practical problems.</p>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools and concepts I've used in my coursework and projects.">
      <div className="grid3">
        {skills.map((g) => { const I = icons[g.icon]; return (
          <article className="card" key={g.title}>
            <div className="card-head"><span className="ico"><I size={20} /></span><h3>{g.title}</h3></div>
            <ul className="tags">{g.items.map((i) => <Tag key={i}>{i}</Tag>)}</ul>
            {g.note && <p className="small">{g.note}</p>}
          </article>) })}
      </div>
    </Section>
  )
}

function EventsPreview() {
  const taken = new Set([3, 4, 11, 12, 13, 22, 23, 30, 31, 38, 39, 40])
  const picked = new Set([25, 26])
  return (
    <div className="pv pv-events" role="img" aria-label="Mockup of the seat selection screen in the event booking platform">
      <div className="pv-bar"><i /><i /><i /><b>Aurora Live · Seat selection</b></div>
      <div className="pv-body">
        <div className="stage">STAGE</div>
        <div className="seats">{Array.from({ length: 48 }, (_, n) => <span key={n} className={taken.has(n) ? 'seat taken' : picked.has(n) ? 'seat pick' : 'seat'} />)}</div>
        <div className="pv-sum"><div><small>2 seats selected</small><strong>Total ₹1,800</strong></div><span className="pv-btn">Confirm booking</span></div>
      </div>
    </div>
  )
}

function CarsPreview() {
  const pts = [[30,170],[52,158],[70,150],[88,146],[104,128],[126,122],[142,104],[160,108],[182,84],[204,78],[224,62],[246,52],[268,40]]
  return (
    <div className="pv pv-cars" role="img" aria-label="Illustration of a regression line fitted through vehicle price data points">
      <div className="pv-bar"><i /><i /><i /><b>Model comparison · Actual vs predicted</b></div>
      <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
        <g stroke="currentColor" strokeOpacity=".12">{[40,80,120,160].map((y) => <line key={y} x1="20" x2="290" y1={y} y2={y} />)}</g>
        <polyline points="30,176 120,124 210,78 280,36" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="var(--accent-2)" fillOpacity=".85" />)}
      </svg>
      <div className="pv-legend"><span><i className="d1" />Linear Regression</span><span><i className="d2" />Decision Tree</span><span>R² · MAE · RMSE</span></div>
    </div>
  )
}

function ProjectCard({ p, flip }) {
  return (
    <article className={`project ${p.featured ? 'featured' : ''} ${flip ? 'flip' : ''}`}>
      <div className="project-visual">{p.preview === 'events' ? <EventsPreview /> : <CarsPreview />}</div>
      <div className="project-body">
        <p className="kind">{p.featured ? 'Featured · ' : ''}{p.kind} · {p.date}</p>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <ul className="feat">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <ul className="tags">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
        <p className="small note">{p.note}</p>
        <div className="cta">
          <LinkBtn href={p.github} icon={Github} label="GitHub link not added yet">View on GitHub</LinkBtn>
          <LinkBtn href={p.demo} icon={ExternalLink} label="Live demo not available">Live demo</LinkBtn>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Two projects I've built, from a full-stack web app to a machine-learning model.">
      <div className="projects">{projects.map((p, i) => <ProjectCard key={p.id} p={p} flip={i % 2 === 1} />)}</div>
    </Section>
  )
}

function Training() {
  return (
    <Section id="training" title="Training and certifications">
      <article className="card training">
        <p className="kind">Summer training · {training.date}</p>
        <h3>{training.title}</h3>
        <p className="org">{training.org}</p>
        <ul className="feat one">{training.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </article>
      <h3 className="h3">Certificates</h3>
      <div className="grid3">
        {certificates.map((c) => (
          <article className="card cert" key={c.title}>
            <span className="ico"><Award size={20} /></span>
            <h4>{c.title}</h4>
            <p>{c.issuer}</p>
            <p className="small">{c.date}</p>
          </article>))}
      </div>
    </Section>
  )
}

function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid2">
        {achievements.map((a) => (
          <article className="card" key={a.title}>
            <p className="kind">{a.date}</p>
            <h3>{a.title}</h3>
            <ul className="feat one">{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>))}
      </div>
    </Section>
  )
}

function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school}>
            <span className="dot"><GraduationCap size={14} /></span>
            <div className="card">
              <p className="kind">{e.date}</p>
              <h3>{e.school}</h3>
              <p>{e.degree}</p>
              <p className="score">{e.score}</p>
              <p className="small"><MapPin size={13} /> {e.place}</p>
            </div>
          </li>))}
      </ol>
    </Section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { window.prompt('Copy this email:', site.email) }
  }
  return (
    <Section id="contact" title="Let's talk" intro="I'm open to internships and entry-level opportunities. The quickest way to reach me is by email.">
      <div className="contact">
        <a className="btn btn-solid" href={`mailto:${site.email}?subject=Hello%20Shubham`}><Mail size={16} />Email me</a>
        <button className="btn btn-ghost" onClick={copy} aria-live="polite">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Email copied' : site.email}</button>
        <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
        <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="social">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
          <a href={`mailto:${site.email}`} aria-label="Send email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <main><Hero /><About /><Skills /><Projects /><Training /><Achievements /><Education /><Contact /></main>
      <Footer />
    </>
  )
}
