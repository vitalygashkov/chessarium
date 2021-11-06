import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({ children, type }) {
  return (
    <button className={`${styles.button} ${type === 'primary' ? styles.buttonPrimary : ''}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['default', 'primary']),
};

export default Button;
