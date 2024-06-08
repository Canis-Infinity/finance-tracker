import clsx from 'clsx';
import styles from './index.module.css';
import { Roboto_Mono } from 'next/font/google';
import { TbArrowsSort } from 'react-icons/tb';
import DataStatus from '@/components/DataStatus';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function Table({
  data,
  columns,
  config,
  handleClick,
  handleSort,
  isLoading,
}) {
  return (
    <table className={clsx(styles.table, robotoMono.className)}>
      <thead className={styles.thead}>
        <tr>
          {columns.header.map((column, index) => (
            <th
              key={index}
              className={clsx({
                [styles.active]: config.sort.key === column.key,
              })}
              onClick={() => handleSort(column.key)}
            >
              {column.title}
              <TbArrowsSort />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {
          isLoading ? (
            <tr className={styles.disableHover}>
              <td colSpan={columns.header.length}>
                <DataStatus content="載入中..." type="loading" />
              </td>
            </tr>
          ) : data.map((row, index) => (
            <tr key={index} onClick={() => handleClick(row)}>
              {columns.header.map((column, index) => {
                const key = column.key;
                const alignment = config?.style?.body[key]?.alignment || 'start';
                const value = config?.style?.body[key]?.format
                  ? config?.style?.body[key]?.format(row[key])
                  : row[key];
                const color = config?.style?.body[key]?.color
                  ? config?.style?.body[key]?.color(row[key])
                  : '';
                const isBadge = config?.style?.body[key]?.isBadge
                  ? config?.style?.body[key]?.isBadge(row[key])
                  : '';
                const badgeClassName = isBadge?.className || '';
                return (
                  <td
                    key={index}
                    className={clsx({
                      [styles[alignment]]: alignment,
                      [styles[color]]: color,
                    })}
                  >
                    {isBadge ? (
                      <div
                        className={clsx(styles.badge, {
                          [styles[badgeClassName]]: badgeClassName,
                        })}
                      >
                        {isBadge.icon}
                        {value}
                      </div>
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))
        }
      </tbody>
      {
        isLoading ? null : (
          <tfoot className={styles.tfoot}>
            <tr>
              {columns.footer.map((column, index) => {
                const key = column.key;
                const alignment =
                  config?.style?.footer[column.key]?.alignment || 'start';
                const value =
                  typeof column.value === 'function'
                    ? column.value(data)
                    : column.value;
                const formatedValue = config?.style?.footer[key]?.format
                  ? config?.style?.footer[key]?.format(value)
                  : value;
                const color = config?.style?.footer[key]?.color
                  ? config?.style?.footer[key]?.color(value)
                  : '';
                return (
                  <th
                    key={index}
                    className={clsx({
                      [styles[alignment]]: alignment,
                      [styles[color]]: color,
                    })}
                  >
                    {formatedValue}
                  </th>
                );
              })}
            </tr>
          </tfoot>
        )
      }
    </table>
  );
}
