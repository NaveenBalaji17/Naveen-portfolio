import { GraduationCap, MapPin } from 'lucide-react';
import { DATA } from '@/data/portfolioData';
import styles from './Education.module.css';

export function Education() {
  return (
    <section className={`section ${styles.education}`} id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">
          {DATA.education.map((edu, index) => (
            <div 
              key={index} 
              className={`timeline-item ${edu.current ? 'current' : ''}`}
            >
              <div className="timeline-content">
                <span className="timeline-date">{edu.duration}</span>
                <h3 className="timeline-title">{edu.degree}</h3>
                <p className="timeline-subtitle">
                  <GraduationCap size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                  {edu.institution}
                </p>
                <p className={styles.location}>
                  <MapPin size={14} />
                  {edu.location}
                </p>
                <span className="timeline-badge">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
