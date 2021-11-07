import styles from './logo.module.scss';
import logoImage from '../../assets/logo.png';

export default function Logo({ className }) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <img className={styles.logoImage} src={logoImage} alt="" />
      <div className={styles.logoTitle}>chessarium</div>
      <div className={styles.logoSubitle}>шахматная школа</div>
    </div>
  );
}
