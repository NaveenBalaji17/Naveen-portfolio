import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className={styles.iconWrapper}>
        <Sun className={`${styles.icon} ${styles.sunIcon} ${isDark ? styles.hidden : ''}`} />
        <Moon className={`${styles.icon} ${styles.moonIcon} ${!isDark ? styles.hidden : ''}`} />
      </span>
    </button>
  );
}
