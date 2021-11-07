import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.module.scss';
import { Button } from '../../ui';

export default function Menu({ links, className }) {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  function getLinkClass(isActive) {
    return isActive ? `${styles.menuLink} ${styles.menuLinkActive}` : styles.menuLink;
  }

  return (
    <nav className={`${styles.menu} ${className}`}>
      <Button
        className={styles.menuButton}
        onClick={() => setIsMenuExpanded((prevState) => !prevState)}
      >
        =
      </Button>
      <ul
        className={`${styles.menuList} ${isMenuExpanded ? styles.menuListVisible : ''}`}
        id="menu-list"
      >
        {links.map((link) => (
          <li key={link.route} className={styles.menuItem}>
            <NavLink className={({ isActive }) => getLinkClass(isActive)} to={link.route}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
