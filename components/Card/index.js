import styles from './index.module.css';
import { Roboto_Mono } from 'next/font/google';
import DataStatus from '@/components/DataStatus';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function Card({ data, isLoading }) {
  return (
    <div className={styles.wrapper} style={isLoading ? {gridTemplateColumns: 'repeat(1, 1fr)'} : {}}>
      {
        isLoading ? (
          <DataStatus content="載入中..." type="loading" />
        ) : (
          data.map((item) => (
            <div className={styles.card} key={item.type}>
              <h3>{item.type}</h3>
              <span className={robotoMono.className}>{new Intl.NumberFormat().format(item.total)}</span>
            </div>
          ))
        )
      }
    </div>
  )
}