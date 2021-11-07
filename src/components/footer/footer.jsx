import styles from './footer.module.scss';
import { Logo } from '../../ui';
import { PageContent } from '../layout';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <PageContent className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <Logo />
          <div className={styles.policy}>
            Политика конфиденциальности и<br /> обработки персональных данных
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div>
            <div className={styles.socialItem}>ВКонтакте</div>
            <div className={styles.socialItem}>Instagram</div>
            <div className={styles.socialItem}>Facebook</div>
          </div>
          <div className={styles.copyright}>Copyright © Chessarium, 2021</div>
        </div>
        <div className={styles.footerColumn}>
          <div>
            <div className={styles.contactLabel}>Вопросы и предложения</div>
            <div className={styles.contactEmail}>info@chessarium.ru</div>
          </div>
        </div>
      </PageContent>
    </footer>
  );
}
