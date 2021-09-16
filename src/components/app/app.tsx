import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Main } from '@/pages/main';
import './app.scss';

function App() {
  return (
    <div className="layout">
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export { App };

