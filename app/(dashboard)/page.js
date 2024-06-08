'use client';
import { useState, useEffect, useMemo, Suspense } from 'react';
import Button from '@/components/Button';
import clsx from 'clsx';
import styles from './index.module.css';
import vaulStyles from '@/styles/vaul.module.css';
import DataStatus from '@/components/DataStatus';
import Card from '@/components/Card';
import HomeTableWrapper from '@/components/HomeTableWrapper';
import dayjs from 'dayjs';
import { RiAddLargeLine } from 'react-icons/ri';
import { Drawer } from 'vaul';
import CustomDrawer from '@/components/CustomDrawer';

const columns = {
  header: [
    {
      key: 'type',
      title: '類別',
    },
    {
      key: 'amount',
      title: '金額',
    },
    {
      key: 'price',
      title: '價格',
    },
  ],
  footer: [
    {
      key: 'type',
      value: '小計',
    },
    {
      key: 'amount',
      value: (data) => data.reduce((acc, cur) => acc + cur.amount, 0),
    },
    {
      key: 'price',
      value: (data) => data.reduce((acc, cur) => acc + cur.price, 0),
    },
  ],
};

const config = {
  clickable: false,
  style: {
    body: {
      type: {
        alignment: 'start',
        isBadge: (value) => {
          const data = getTypeData(value);
          return {
            icon: data.icon,
            className: data.className,
          };
        },
      },
      amount: {
        alignment: 'end',
        format: (value) => {
          return new Intl.NumberFormat().format(value);
        },
      },
      price: {
        alignment: 'end',
        color: (value) => {
          return value > 0 ? 'increase' : 'decrease';
        },
        format: (value) => {
          return new Intl.NumberFormat().format(value);
        },
      },
    },
    footer: {
      type: {
        alignment: 'start',
      },
      amount: {
        alignment: 'end',
        format: (value) => {
          return new Intl.NumberFormat().format(value);
        },
      },
      price: {
        alignment: 'end',
        color: (value) => {
          return value > 0 ? 'increase' : 'decrease';
        },
        format: (value) => {
          return new Intl.NumberFormat().format(value);
        },
      },
    },
  },
};

const defaultSort = { key: 'type', order: 'desc' };

export default function Home() {
  const [cardData, setCardData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [sort, setSort] = useState({ key: 'type', order: 'desc' });
  const [date, setDate] = useState({ from: '', to: '', month: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const curDate = dayjs().format('YYYY-MM-DD');
    const pastMonth = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
    const curMonth = dayjs().format('YYYY-MM');
    setDate({ from: pastMonth, to: curDate, month: curMonth });
  }, []);

  useEffect(() => {
    setIsLoading(true);
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
    setTableData(data);
    const expense = data.filter((item) => item.price < 0);
    const income = data.filter((item) => item.price > 0);
    setCardData([
      {
        type: '本日支出',
        total: expense.reduce((acc, cur) => acc + cur.price, 0) * -1,
      },
      {
        type: '本日收入',
        total: income.reduce((acc, cur) => acc + cur.price, 0),
      },
    ]);
    setIsLoading(false);
  }, []);

  return (
    <Drawer.Root direction="right">
      <hgroup>
        <h1>首頁</h1>
        <Drawer.Trigger
          className={clsx(vaulStyles.btn, styles.btn)}
          data-desktop
        >
          <RiAddLargeLine />
          新增記錄
        </Drawer.Trigger>
      </hgroup>
      <Suspense fallback={<DataStatus content="載入中..." type="loading" />}>
        <Card data={cardData} isLoading={isLoading} />
        <HomeTableWrapper defaultData={tableData} defaultDate={date} />
      </Suspense>
      <CustomDrawer>{/* content */}111</CustomDrawer>
    </Drawer.Root>
  );
}
