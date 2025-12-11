import { ExternalLink, Github, Cpu, Code2 } from 'lucide-react';
import { DATA } from '@/data/portfolioData';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className={styles.grid}>
          {DATA.projects.map(project => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.categoryBadge}>
                  {project.category === 'hardware' ? (
                    <><Cpu size={14} /> Hardware</>
                  ) : (
                    <><Code2 size={14} /> Software</>
                  )}
                </div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.longDescription}</p>
                
                <div className="tags-container">
                  {project.techStack.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                
                <div className={styles.links}>
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
