import styles from './index.module.css';
import { Roboto_Mono } from 'next/font/google';
import DataStatus from '@/components/DataStatus';
import { PiTrendDownBold, PiTrendUpBold } from 'react-icons/pi';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const cardIcons = {
  expense: <PiTrendDownBold />,
  income: <PiTrendUpBold />,
};

export default function Card({ data, isLoading }) {
  return (
    <div
      className={styles.wrapper}
      style={isLoading ? { gridTemplateColumns: 'repeat(1, 1fr)' } : {}}
    >
      {isLoading ? (
        <DataStatus content="載入中..." type="loading" />
      ) : (
        data.map((item) => (
          <div className={styles.card} key={item.type}>
            <h3>{item.content}</h3>
            <span className={robotoMono.className}>
              {new Intl.NumberFormat().format(item.total)}
            </span>
            {cardIcons[item.type]}
          </div>
        ))
      )}
    </div>
  );
}
