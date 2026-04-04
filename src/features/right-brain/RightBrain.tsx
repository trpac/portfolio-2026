import React from 'react';
import styles from './RightBrain.module.css';

const RightBrain: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Soul State</h2>
        <hr className={styles.divider} />
        <p className={styles.description}>
          A cinematic exploration of sound and movement. 
          Crafted in the mountains of Antioquia.
        </p>
        <div className={styles.mediaTag}>
          <span>Audio Engineering</span>
          <span className={styles.separator}>|</span>
          <span>Visual Storytelling</span>
        </div>
      </div>
    </section>
  );
};

export default RightBrain;