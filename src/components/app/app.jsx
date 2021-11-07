import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import { Header } from '../header';
import { Footer } from '../footer';
import { Home, Courses, Textbooks, Contacts, About, NotFound } from '../../pages';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/textbooks" element={<Textbooks />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
