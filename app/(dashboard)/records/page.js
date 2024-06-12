import { Suspense } from 'react';
import RecordsWrapper from '@/components/RecordsWrapper';
import dayjs from 'dayjs';
import DataStatus from '@/components/DataStatus';

const colors = {
  income: '#40a070',
  expense: '#A1414C',
}

export default function Records() {
  const tableData = [
    {
      type: 'food',
      amount: 63,
      price: -9600,
    },
    {
      type: 'salary',
      amount: 1,
      price: 28600,
    },
    {
      type: 'traffic',
      amount: 3,
      price: -320,
    },
    {
      type: 'rent',
      amount: 22,
      price: -6500,
    },
    {
      type: 'medical',
      amount: 1,
      price: -300,
    },
    {
      type: 'other',
      amount: 1,
      price: 510,
    },
  ];

  const data1 = {
    labels: ['小計'],
    datasets: [
      {
        label: '收入',
        data: [1000],
        backgroundColor: colors.income,
        borderRadius: 10,
      },
      {
        label: '支出',
        data: [-350],
        backgroundColor: colors.expense,
        borderRadius: 10,
      },
    ],
  };

  const data2 = {
    labels: [
      '2024-01',
      '2024-02',
      '2024-03',
      '2024-04',
      '2024-05',
      '2024-06',
      '2024-07',
      '2024-08',
      '2024-09',
      '2024-10',
    ],
    datasets: [
      {
        label: '收入',
        data: [1000, 350, 500, 700, 800, 900, 1000, 1200, 1500, 2000],
        backgroundColor: colors.income,
        borderRadius: 10,
      },
      {
        label: '支出',
        data: [-500, -350, -400, -600, -700, -800, -900, -1000, -1200, -1500],
        backgroundColor: colors.expense,
        borderRadius: 10,
      },
    ],
  };

  const curDate = dayjs().format('YYYY-MM-DD');
  const pastMonth = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
  const curMonth = dayjs().format('YYYY-MM');

  return (
    <>
      <hgroup>
        <h1>收支記錄</h1>
      </hgroup>
      <Suspense fallback={<DataStatus content="載入中..." type="loading" />}>
        <RecordsWrapper
          defaultData={{
            tableData,
            lineChartData: {
              data1,
              data2,
            }
          }}
          defaultDate={{ from: pastMonth, to: curDate, month: curMonth }}
        />
      </Suspense>
    </>
  );
}
