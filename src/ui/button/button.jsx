import styles from './button.module.scss';

export default function Button({ children, type }) {
  return (
    <button className={`${styles.button} ${type === 'primary' ? styles.buttonPrimary : ''}`}>
      {children}
    </button>
  );
}
