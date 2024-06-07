import RegisterForm from '@/components/RegisterForm'
import styles from './index.module.css';

export default function Register() {
  return (
    <>
      <header className={styles.header}>
        <h1>註冊</h1>
      </header>
      <RegisterForm />
    </>
  );
}