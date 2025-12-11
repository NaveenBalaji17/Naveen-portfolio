import { ArrowDown, Download, Mail } from 'lucide-react';
import { DATA } from '@/data/portfolioData';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background}>
        <div className={styles.gradient} />
        <div className={styles.pattern} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarGlow} />
          <img 
            src={DATA.personal.avatar} 
            alt={`${DATA.personal.name}'s avatar`}
            className={styles.avatar}
          />
        </div>

        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.name}>{DATA.personal.name}</h1>
        <p className={styles.tagline}>{DATA.personal.tagline}</p>
        <p className={styles.bio}>{DATA.personal.shortBio}</p>

        <div className={styles.actions}>
          <a 
            href={DATA.personal.resume} 
            download 
            className="btn btn-primary btn-lg"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary btn-lg">
            <Mail size={18} />
            Get In Touch
          </a>
        </div>

        <a href="#about" className={styles.scrollIndicator} aria-label="Scroll to about section">
          <ArrowDown className={styles.scrollIcon} />
        </a>
      </div>
    </section>
  );
}
