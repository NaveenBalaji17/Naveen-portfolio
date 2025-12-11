import { Cpu, Code2 } from 'lucide-react';
import { DATA } from '@/data/portfolioData';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className={styles.grid}>
          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={styles.iconWrapper}>
                <Cpu className={styles.icon} />
              </div>
              <h3 className={styles.categoryTitle}>Hardware</h3>
            </div>
            <div className={styles.skillTags}>
              {DATA.skills.hardware.map(skill => (
                <span key={skill.name} className={styles.skillTag}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={styles.iconWrapper}>
                <Code2 className={styles.icon} />
              </div>
              <h3 className={styles.categoryTitle}>Software</h3>
            </div>
            <div className={styles.skillTags}>
              {DATA.skills.software.map(skill => (
                <span key={skill.name} className={styles.skillTag}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
