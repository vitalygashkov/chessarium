import styles from './landing.module.scss';
import { Button } from '../../ui/button';

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.promo}>
        <div className={styles.promoContent}>
          <div className={styles.promoCaption}>
            Тренируйся. Учись. Играй. <br />
            Развивай свои навыки
          </div>
          {/*<div className="promo__description"></div>*/}
          <div className="promo__actions">
            <Button>Начать обучение</Button>
          </div>
        </div>
      </div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
      <div style={{ fontSize: 50 }}>Онлайн-курс по шахматам</div>
    </div>
  );
}

export default Landing;
