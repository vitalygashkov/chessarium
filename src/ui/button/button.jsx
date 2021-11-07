import styles from './button.module.scss';

export default function Button({ children, type, className, onClick }) {
  return (
    <button
      className={`${styles.button} ${type === 'primary' ? styles.buttonPrimary : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
