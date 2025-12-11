import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { DATA } from '@/data/portfolioData';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.brand}>
          <span className={styles.brandName}>{DATA.personal.name.split(' ')[0]}</span>
          <span className={styles.brandDot}>.</span>
        </a>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={styles.navLink}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileContact}>
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href="#contact" className={`btn btn-primary ${styles.contactBtn}`}>
            Contact
          </a>
          <button
            className={styles.menuBtn}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
