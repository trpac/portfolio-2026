import React from 'react';
import styles from './BrainToggle.module.css';

interface BrainToggleProps {
  mode: 'left' | 'right';
  setMode: (mode: 'left' | 'right') => void;
}

const BrainToggle: React.FC<BrainToggleProps> = ({ mode, setMode }) => {
  return (
    <div className={styles.toggleContainer}>
      <div 
        className={`${styles.toggleTrack} ${mode === 'right' ? styles.rightActive : ''}`}
        onClick={() => setMode(mode === 'left' ? 'right' : 'left')}
      >
        <span className={styles.label}>LOGIC</span>
        <span className={styles.label}>STUDIO</span>
        
        {/* The Sliding Indicator */}
        <div className={styles.slider}></div>
      </div>
    </div>
  );
};

export default BrainToggle;