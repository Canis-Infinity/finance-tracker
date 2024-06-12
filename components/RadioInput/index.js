import clsx from 'clsx';
import styles from './index.module.css';

export default function RadioInput({ name, type, content }) {
  return (
    <div className={clsx(styles.wrapper, styles[type])}>
      <input type="radio" name={name} id={type} value={type} />
      <label htmlFor={type}>{content}</label>
    </div>
  );
}