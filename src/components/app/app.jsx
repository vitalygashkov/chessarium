import styles from './app.module.scss';
import { Header } from '../header';
import { Footer } from '../footer';
import { Landing } from '../../pages/landing';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        <Landing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
