import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import { Header } from '../header';
import { Footer } from '../footer';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layoutPage}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
