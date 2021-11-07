import styles from './home.module.scss';
import { Button } from '../../ui/button';
import { PageContent } from '../../components/layout';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.promo}>
        <PageContent className={styles.promoContent}>
          <div className={styles.promoCaption}>
            Тренируйся. Учись. Играй. <br />
            Развивай свои навыки
          </div>
          <div>
            <Button>Начать обучение</Button>
          </div>
        </PageContent>
      </div>
    </div>
  );
}
