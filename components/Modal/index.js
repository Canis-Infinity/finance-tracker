import Button from '@/components/Button';
import styles from './index.module.css';
import clsx from 'clsx';
import { RiCloseLine } from 'react-icons/ri';

export default function Modal({
  size,
  title,
  close,
  children
}) {
  return (
    <div className={clsx(styles.modal, styles[size])}>
      <div className={styles.top}>
        <h3>{title}</h3>
        <Button
          isIconType={true}
          icon={<RiCloseLine />}
          onClick={close}
        />
      </div>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
}
