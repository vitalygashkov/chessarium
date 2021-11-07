import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import { Header } from '../header';
import { Footer } from '../footer';
import { Home } from '../../pages/home';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
