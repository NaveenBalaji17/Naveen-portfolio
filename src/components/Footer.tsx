import { Heart } from 'lucide-react';
import { DATA } from '@/data/portfolioData';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.copyright}>{DATA.footer.copyright}</p>
          <p className={styles.tagline}>
            Built with <Heart size={14} className={styles.heart} /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}
