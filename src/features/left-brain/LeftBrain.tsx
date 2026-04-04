import React from 'react';
import styles from './LeftBrain.module.css';

const LeftBrain: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.command}>$ whoami</p>
          <p className={styles.response}>Nicholas Henao Gallego: Software Engineer</p>
          <p className={styles.command}>$ locate --projects</p>
          <ul className={styles.projectList}>
            <li>{'>'} Blue Moon Project [Active]</li>
            <li>{'>'} Creative Intellect Portfolio</li>
            <li>{'>'} The Remedy Line Architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeftBrain;