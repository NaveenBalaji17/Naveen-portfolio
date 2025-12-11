import { Trophy, MapPin, Calendar } from 'lucide-react';
import { DATA } from '@/data/portfolioData';
import styles from './Achievements.module.css';

export function Achievements() {
  return (
    <section className={`section ${styles.achievements}`} id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className={styles.grid}>
          {DATA.achievements.map((achievement, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Trophy className={styles.icon} />
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.title}>{achievement.title}</h3>
                <p className={styles.event}>{achievement.event}</p>
                
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <Calendar size={14} />
                    {achievement.year}
                  </span>
                  <span className={styles.metaItem}>
                    <MapPin size={14} />
                    {achievement.venue}
                  </span>
                </div>
                
                <p className={styles.organizer}>
                  Organized by <strong>{achievement.organizer}</strong>
                </p>
                
                <p className={styles.description}>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
