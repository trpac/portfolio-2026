import React, { useState, useEffect } from 'react';
import './App.css';

type Section = 'home' | 'left' | 'right' | 'about' | 'contact';

// --- Sub-Component: Left Brain ---
const LeftBrain = () => {
  const projects = [
    {
      id: "01",
      category: "AI Architecture",
      title: "Neural Interface Systems",
      description: "Developing scalable React-based dashboards for real-time AI data visualization and model monitoring.",
      tech: ["TypeScript", "React", "Tailwind"]
    },
    {
      id: "02",
      category: "Software Engineering",
      title: "Blue Moon OS",
      description: "A custom lifestyle operating system designed for deep focus (Monk Mode) and high-output executive tasks.",
      tech: ["React", "Node.js", "Notion API"]
    },
    {
      id: "03",
      category: "Computation",
      title: "Mathematical Modeling",
      description: "Implementing discrete mathematics principles into functional code to optimize complex system logic.",
      tech: ["Python", "Java", "LaTeX"]
    }
  ];

  return (
    <section className="animate-reveal py-12">
      <div className="flex items-center gap-6 mb-20">
        <div className="h-[1px] w-24 bg-sky-400"></div>
        <h2 className="text-[10px] font-mono tracking-[0.5em] uppercase text-sky-400">
          LOGIC_VAULT // STRUCTURED_SYSTEMS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/[0.08] transition-all duration-500 flex flex-col justify-between min-h-[350px]">
            <div>
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">Project_{project.id}</span>
              <h3 className="text-2xl font-light text-white mt-4 mb-6 group-hover:text-sky-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-8">{project.description}</p>
            </div>
            <div className="pt-6 border-t border-white/5">
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter border border-slate-800 px-2 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
        <div>
          <h4 className="text-[9px] uppercase tracking-widest text-white mb-4">Languages</h4>
          <ul className="text-xs font-light text-slate-400 space-y-2">
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[9px] uppercase tracking-widest text-white mb-4">Frameworks</h4>
          <ul className="text-xs font-light text-slate-400 space-y-2">
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[9px] uppercase tracking-widest text-white mb-4">Tools</h4>
          <ul className="text-xs font-light text-slate-400 space-y-2">
            <li>Git</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// --- Main Application ---
export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className={`app-container min-h-screen transition-all duration-1000 ${activeSection === 'right' ? 'bg-midnight-gradient-alt' : 'bg-midnight-gradient'}`}>
      
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-8 md:px-16">
        <button onClick={() => setActiveSection('home')} className="text-[10px] font-black tracking-[0.5em] uppercase text-white hover:opacity-70 transition-opacity">
          CREATIVE_INTELLECT
        </button>

        <div className="flex space-x-6 md:space-x-10">
          {(['left', 'right', 'about', 'contact'] as Section[]).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all relative py-1 ${activeSection === section ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {section === 'left' ? 'Left Brain' : section === 'right' ? 'Right Brain' : section}
              {activeSection === section && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-400 animate-in fade-in" />
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="pt-48 pb-32 px-8 md:px-16 max-w-7xl mx-auto">
        {activeSection === 'home' && (
          <div className="animate-reveal">
            <header className="mb-20">
              <h1 className="text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.8] text-white">
                Creative <br /> <span className="serif italic text-slate-500">Intellect.</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mt-4">
                Nicholas Henao Gallego
              </h2>
              <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-md">
                  <p className="text-[10px] uppercase tracking-[0.5em] text-sky-400 mb-4 font-bold">Innovative Developer & Creative Engineer</p>
                  <div className="h-[1px] w-full bg-white/10"></div>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-[0.3em] max-w-xs leading-loose text-right">
                  Architecting digital systems. <br />Composing sonic narratives.
                </p>
              </div>
            </header>
          </div>
        )}

        {activeSection === 'left' && <LeftBrain />}

        {activeSection === 'right' && (
           <div className="animate-reveal">
             <h2 className="text-5xl font-light text-white serif italic">Aural Explorations coming soon.</h2>
           </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-reveal max-w-2xl">
            <h2 className="text-5xl font-light text-white mb-8">The Synthesis.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Operating at the intersection of logic and rhythm. Based in Rionegro, Colombia.
            </p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="animate-reveal max-w-4xl">
            <h2 className="text-6xl font-light tracking-tighter mb-16 text-white">Connect.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-4">Direct Email</h4>
                  <a href="mailto:nhenao98@outlook.com" className="text-2xl font-light text-white hover:text-sky-400 transition-colors">
                    nhenao98@outlook.com
                  </a>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-4">Phone</h4>
                  <p className="text-2xl font-light text-white">+57 300 115 6230</p>
                </div>
              </div>
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-4">Social Architecture</h4>
                  <a href="https://linkedin.com/in/nicholashenao" target="_blank" rel="noreferrer" className="text-2xl font-light text-white hover:text-sky-400 transition-colors block">
                    LinkedIn Profile _
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-12 left-10 hidden lg:block opacity-30">
        <p className="text-[9px] font-mono text-white tracking-[0.5em] uppercase vertical-text">
          EST. 2026 // NICHOLAS HENAO GALLEGO
        </p>
      </div>
    </div>
  );
}