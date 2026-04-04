import React, { useState, useEffect } from 'react';
import './assets/styles/variables.css';
import styles from './App.module.css';

// Components
import Nexus from './features/nexus/Nexus';
import BrainToggle from './components/ui/BrainToggle';
import LeftBrain from './features/left-brain/LeftBrain';
import RightBrain from './features/right-brain/RightBrain';

/**
 * Creative Intellect 2026
 * Architect: Nicholas Henao Gallego
 * System: Dual-Hemisphere React Interface
 */

type Mode = 'left' | 'right';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('left');

  // Sync the data-theme attribute to the HTML root for global CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', `${mode}-brain`);
  }, [mode]);

  return (
    <div className={styles.appShell}>
      {/* 1. Identity & Contact Information (Persistent) */}
      <Nexus />

      {/* 2. System Navigation */}
      <header className={styles.header}>
        <div className={styles.statusArea}>
          <span className={styles.pulseDot}></span>
          <span className={styles.systemPath}>
            Root // {mode === 'left' ? 'Engineering.Log' : 'Creative.Studio'}
          </span>
        </div>

        {/* The New Aesthetic Slider Button */}
        <BrainToggle mode={mode} setMode={setMode} />
      </header>

      {/* 3. Primary Content Area */}
      <main className={styles.mainContent}>
        <div key={mode} className={styles.fadeTransition}>
          {mode === 'left' ? <LeftBrain /> : <RightBrain />}
        </div>
      </main>

      {/* 4. Minimalist Footer */}
      <footer className={styles.footer}>
        <span className={styles.timestamp}>
          {new Date().getFullYear()} // System Version 2.0.26
        </span>
      </footer>
    </div>
  );
};

export default App;