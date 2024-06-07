import Footer from '@/components/Footer';
import styles from './index.module.css'

export default function RootLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
      <Footer />
    </div>
  );
}
