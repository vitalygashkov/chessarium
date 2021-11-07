import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Logo } from '../../ui';
import Menu from './menu';

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
      <Logo className={styles.headerLogo} />
      <Menu className={styles.headerMenu} links={navLinks} />
    </header>
  );
}
