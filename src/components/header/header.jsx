import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Logo } from '../../ui/logo';
import { Button } from '../../ui/button';

function Header() {
  const [isShadowVisible, setIsShadowVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function onScroll() {
    const isScrollOnTop = window.scrollY < 10;
    setIsShadowVisible((prevState) => {
      if (isScrollOnTop && prevState === true) return false;
      if (!isScrollOnTop && prevState === false) return true;
      return prevState;
    });
  }

  return (
    <header className={`${styles.header} ${isShadowVisible ? styles.headerCompact : ''}`}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.navMenu}>
          <a className={`${styles.navMenuItem} ${styles.navMenuItemActive}`} href="#">
            Главная
          </a>
          <a className={styles.navMenuItem} href="#">
            Курсы
          </a>
          <a className={styles.navMenuItem} href="#">
            Учебники
          </a>
          <a className={styles.navMenuItem} href="#">
            Контакты
          </a>
          <a className={styles.navMenuItem} href="#">
            О нас
          </a>
        </div>
        <div className={styles.actions}>
          <Button type="primary">Оставить заявку</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
