import { Suspense } from 'react';
import RecordsWrapper from '@/components/RecordsWrapper';
import dayjs from 'dayjs';
import DataStatus from '@/components/DataStatus';

export default function Records() {
  const data = [
    {
      type: '飲食',
      amount: 63,
      price: -9600,
    },
    {
      type: '薪資',
      amount: 1,
      price: 28600,
    },
    {
      type: '交通',
      amount: 3,
      price: -320,
    },
    {
      type: '房租',
      amount: 22,
      price: -6500,
    },
    {
      type: '醫療',
      amount: 1,
      price: -150,
    },
    {
      type: '其它',
      amount: 1,
      price: 21,
    },
  ];

  const curDate = dayjs().format('YYYY-MM-DD');
  const pastMonth = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
  const curMonth = dayjs().format('YYYY-MM');

  return (
    <>
      <hgroup>
        <h1>收支記錄</h1>
      </hgroup>
      <Suspense fallback={<DataStatus content="載入中..." type="loading" />}>
        <RecordsWrapper defaultData={data} defaultDate={{ from: pastMonth, to: curDate, month: curMonth }} />
      </Suspense>
    </>
  );
}
