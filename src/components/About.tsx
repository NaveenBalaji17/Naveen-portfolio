import { DATA } from '@/data/portfolioData';
import styles from './About.module.css';

export function About() {
  const paragraphs = DATA.about.story.split('\n\n').filter(p => p.trim());

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <h2 className="section-title">My Story</h2>
        
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageDecor} />
            <img 
              src={DATA.personal.avatar} 
              alt={DATA.personal.name}
              className={styles.image}
            />
          </div>
          
          <div className={styles.text}>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph.trim()}
              </p>
            ))}
            
            <div className={styles.cta}>
              <p className={styles.ctaText}>
                <strong>Looking to hire a passionate engineer?</strong> I'd love to chat about how I can contribute to your team!
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
