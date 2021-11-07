import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { Logo, Button } from '../../ui';
import { PageContent } from '../layout';

export default function Header() {
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function onScroll() {
    const isScrollOnTop = window.scrollY < 10;
    setIsHeaderCompact((prevState) => {
      if (isScrollOnTop && prevState === true) return false;
      if (!isScrollOnTop && prevState === false) return true;
      return prevState;
    });
  }

  const navLinks = [
    { label: 'Главная', route: '/' },
    { label: 'Курсы', route: '/courses' },
    { label: 'Учебники', route: '/textbooks' },
    { label: 'Контакты', route: '/contacts' },
    { label: 'О нас', route: '/about' },
  ];

  return (
    <header className={`${styles.header} ${isHeaderCompact ? styles.headerCompact : ''}`}>
      <PageContent className={styles.headerContent}>
        <Logo />
        <div className={styles.navMenu}>
          {navLinks.map((link) => (
            <NavLink
              key={link.route}
              className={({ isActive }) =>
                isActive ? `${styles.navMenuItem} ${styles.navMenuItemActive}` : styles.navMenuItem
              }
              to={link.route}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className={styles.actions}>
          <Button type="primary">Оставить заявку</Button>
        </div>
      </PageContent>
    </header>
  );
}
