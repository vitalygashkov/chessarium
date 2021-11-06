import styles from './header.module.scss';
import { Logo } from '../../ui/logo';
import { Button } from '../../ui/button';

function Header() {
  return (
    <header className={styles.header}>
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
