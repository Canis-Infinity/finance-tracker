import LoginForm from '@/components/LoginForm';
import styles from './index.module.css';

export default function Login() {
  return (
    <>
      <header className={styles.header}>
        <h1>登入</h1>
      </header>
      <LoginForm />
    </>
  );
}