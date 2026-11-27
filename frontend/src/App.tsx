import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Cpu, Laptop, Monitor, Sparkles,
  BriefcaseBusiness, Code2, Palette, BrainCircuit, ShieldCheck,
  Globe2, Menu, X, Check
} from "lucide-react";

const tracks = [
  { icon: Laptop, title: "Laptop recommendations", detail: "Find a portable system matched to your workload, budget and battery needs." },
  { icon: Monitor, title: "Desktop recommendations", detail: "Choose a ready-made desktop or plan a system that can grow with you." },
  { icon: Cpu, title: "Custom PC builder", detail: "Build a compatible configuration with component-level guidance." }
];

const workflows = [
  { icon: Code2, title: "Programming & development", tools: "VS Code · Android Studio · MATLAB · Embedded IDEs" },
  { icon: Palette, title: "Design & content creation", tools: "Photoshop · Premiere Pro · Blender · DaVinci Resolve" },
  { icon: BrainCircuit, title: "AI, ML & data science", tools: "PyTorch · TensorFlow · CUDA · Local LLMs" },
  { icon: BriefcaseBusiness, title: "Business & productivity", tools: "Excel · Power BI · SAP · Office" }
];

export function App() {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Embed Xplore home">
          <span className="brand-mark"><Cpu size={21} /></span>
          <span><strong>EMBED <i>XPLORE</i></strong><small>SMART PC ADVISOR</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#how-it-works">How it works</a>
          <a href="#use-cases">Use cases</a>
          <a href="#recommendations">Recommendations</a>
          <div className="language-switch" aria-label="Language">
            {["EN", "हि", "ਪੰ"].map((item) => (
              <button key={item} className={language === item ? "language-active" : ""} onClick={() => setLanguage(item)}>{item}</button>
            ))}
          </div>
          <button className="nav-cta" onClick={() => setStarted(true)}>Start advisor <ArrowUpRight size={16} /></button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> INTELLIGENT PC RECOMMENDATIONS</div>
            <h1>Your work deserves<br />the <span>right machine.</span></h1>
            <p className="hero-description">Not sure which computer to buy? Tell us what you do, which software you use and where you want to go. Get hardware recommendations built around your real workload.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => setStarted(true)}>Find my computer <ArrowRight size={18} /></button>
              <a className="text-link" href="#how-it-works">See how it works <ArrowUpRight size={16} /></a>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={16} /> Workload-first matching</span>
              <span><Globe2 size={16} /> Global-ready</span>
              <span><Sparkles size={16} /> Explainable results</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration of a laptop and hardware specifications">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="spec-card spec-top"><span className="spec-icon"><Cpu size={17} /></span><span><b>Built around your work</b><small>Not just a spec sheet</small></span><Check size={17} className="check-icon" /></div>
            <div className="device">
              <div className="screen">
                <div className="screen-bar"><span /><span /><span /></div>
                <div className="screen-content">
                  <div className="screen-label">SYSTEM MATCH</div>
                  <div className="screen-score">94<span>/100</span></div>
                  <div className="score-line"><i /></div>
                  <div className="screen-tags"><span>CPU</span><span>GPU</span><span>RAM</span></div>
                  <div className="screen-bars"><i /><i /><i /></div>
                </div>
              </div>
              <div className="keyboard"><div /></div>
            </div>
            <div className="spec-card spec-bottom"><span className="spark-box"><Sparkles size={17} /></span><span><b>3 tailored tiers</b><small>Budget · Balanced · Pro</small></span></div>
            <div className="floating-chip chip-one">CPU <b>+</b> GPU</div>
            <div className="floating-chip chip-two">YOUR NEXT UPGRADE <ArrowUpRight size={13} /></div>
          </div>
        </section>

        <section className="metrics">
          <div><strong>01</strong><span>Understand your work</span></div>
          <div><strong>02</strong><span>Match software to hardware</span></div>
          <div><strong>03</strong><span>Compare smarter choices</span></div>
          <div><strong>04</strong><span>Plan for what's next</span></div>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-heading">
            <div><div className="eyebrow">ONE ADVISOR. THREE PATHS.</div><h2>Choose your next<br /><span>computing platform.</span></h2></div>
            <p>From a student laptop to a professional workstation, start with the type of system you need.</p>
          </div>
          <div className="track-grid">
            {tracks.map(({ icon: Icon, title, detail }, index) => (
              <button className="track-card" key={title} onClick={() => setStarted(true)}>
                <div className="track-top"><span className="track-icon"><Icon size={22} /></span><span className="track-number">0{index + 1}</span></div>
                <h3>{title}</h3><p>{detail}</p><span className="card-link">Explore path <ArrowUpRight size={16} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="workflow-section" id="use-cases">
          <div className="section-heading">
            <div><div className="eyebrow">RECOMMENDATIONS THAT UNDERSTAND CONTEXT</div><h2>Your software matters.<br /><span>Your profession matters.</span></h2></div>
            <p>We look beyond processor names. Your tools, projects and daily workload shape the recommendation.</p>
          </div>
          <div className="workflow-grid">
            {workflows.map(({ icon: Icon, title, tools }) => (
              <div className="workflow-item" key={title}><span className="workflow-icon"><Icon size={20} /></span><div><h3>{title}</h3><p>{tools}</p></div><ArrowUpRight size={17} className="workflow-arrow" /></div>
            ))}
          </div>
        </section>

        <section className="recommend-section" id="recommendations">
          <div className="recommend-copy"><div className="eyebrow">CLEAR CHOICES. NO GUESSWORK.</div><h2>Three ways to get<br />the <span>right fit.</span></h2><p>Compare recommendations with transparent trade-offs, upgrade paths and suitability explanations.</p><button className="primary-button" onClick={() => setStarted(true)}>Build my recommendation <ArrowRight size={18} /></button></div>
          <div className="tier-list">
            <div className="tier"><span className="tier-index">01</span><div><h3>Budget-Optimized</h3><p>Get the best practical performance for your spending limit.</p></div><span className="tier-tag">VALUE</span></div>
            <div className="tier tier-featured"><span className="tier-index">02</span><div><h3>Balanced</h3><p>Balance performance, reliability, portability and future needs.</p></div><span className="tier-tag">ALL-ROUNDER</span></div>
            <div className="tier"><span className="tier-index">03</span><div><h3>Professional</h3><p>Prioritise demanding workloads, headroom and expandability.</p></div><span className="tier-tag">PERFORMANCE</span></div>
          </div>
        </section>

        <section className="bottom-cta"><div><div className="eyebrow">THE RIGHT PC STARTS WITH THE RIGHT QUESTIONS</div><h2>Let's find your next machine.</h2><p>A guided profile. Practical recommendations. A smarter purchase.</p></div><button className="primary-button" onClick={() => setStarted(true)}>Start the advisor <ArrowRight size={18} /></button></section>
      </main>

      <footer><a className="brand footer-brand" href="#"><span className="brand-mark"><Cpu size={19} /></span><span><strong>EMBED <i>XPLORE</i></strong><small>SMART PC ADVISOR</small></span></a><span>© 2026 Embed Xplore. Built for informed decisions.</span><span>Find the right computer for your work, skills & future.</span></footer>

      {started && <div className="modal-backdrop" role="presentation" onClick={() => setStarted(false)}>
        <div className="advisor-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
          <button className="modal-close" onClick={() => setStarted(false)} aria-label="Close"><X size={20} /></button>
          <div className="modal-icon"><Sparkles size={23} /></div>
          <div className="eyebrow">SMART PC ADVISOR · PROFILE SETUP</div>
          <h2 id="modal-title">Let's start with your work.</h2>
          <p>The guided questionnaire is the next build milestone. It will capture your profession, software, workload, budget and future plans before producing recommendations.</p>
          <div className="coming-list"><span><Check size={15} /> Job role and industry</span><span><Check size={15} /> Software and project workload</span><span><Check size={15} /> Budget, portability and upgrade needs</span></div>
          <button className="primary-button full-button" onClick={() => setStarted(false)}>Got it <Check size={17} /></button>
        </div>
      </div>}
    </div>
  );
}
