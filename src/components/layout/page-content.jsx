import styles from './page-content.module.scss';

export default function PageContent({ children, className }) {
  return <div className={`${styles.pageContent} ${className}`}>{children}</div>;
}
