import styles from '../styles/Hero.module.css';

const Hero = () => (
  <section className={styles.heroSection}>
    {/* Main Content Box */}
    <div className={styles.contentBox}>
      <h1 className={styles.projectTitle}>
        Robo Ruth 12
      </h1>
      <p className={styles.projectTagline}>
        The AI Shepherdess of the Blockchain Universe
      </p>
      <button className={styles.actionButton}>Join the Mission</button>
    </div>
  </section>
);

export default Hero;
