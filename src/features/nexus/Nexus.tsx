import React from 'react';
import styles from './Nexus.module.css';

const Nexus: React.FC = () => {
  return (
    <nav className={styles.nexusContainer}>
      <div className={styles.identity}>
        <h1 className={styles.name}>Nicholas Henao Gallego</h1>
        <p className={styles.description}>Software Engineer & Music Producer</p>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Location</span>
          <span className={styles.value}>Rionegro, Antioquia, CO</span>
        </div>
        
        <div className={styles.infoItem}>
          <span className={styles.label}>Digital</span>
          <a href="mailto:nicolashenao@example.com" className={styles.link}>
            nicolashenao@example.com
          </a>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Direct</span>
          <a 
            href="https://wa.me/573000000000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            +57 [WhatsApp]
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nexus;