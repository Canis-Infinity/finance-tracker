'use client';
import { useState, useEffect, useMemo, Suspense } from 'react';
import { createPortal } from 'react-dom';
import Button from '@/components/Button';
import clsx from 'clsx';
import styles from './index.module.css';
import DataStatus from '@/components/DataStatus';
import Card from '@/components/Card';
import HomeTableWrapper from '@/components/HomeTableWrapper';
import dayjs from 'dayjs';
import { RiAddLargeLine } from 'react-icons/ri';
import Modal from '@/components/Modal';
import CreateRecordForm from '@/components/CreateRecordForm';

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
            content: data.content,
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
  const [modalOpen, setModalOpen] = useState(false);
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
    setTableData(data);
    const expense = data.filter((item) => item.price < 0);
    const income = data.filter((item) => item.price > 0);
    setCardData([
      {
        type: 'expense',
        content: '本日支出',
        total: expense.reduce((acc, cur) => acc + cur.price, 0) * -1,
      },
      {
        type: 'income',
        content: '本日收入',
        total: income.reduce((acc, cur) => acc + cur.price, 0),
      },
    ]);
    setIsLoading(false);
  }, []);

  const handleModal = () => {
    document.querySelector('html').classList.toggle('overflowHidden');
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <hgroup>
        <h1>首頁</h1>
        <Button
          color="primary"
          icon={<RiAddLargeLine />}
          content="新增記錄"
          size="large"
          width="relaxed"
          onClick={handleModal}
        />
      </hgroup>
      <Suspense fallback={<DataStatus content="載入中..." type="loading" />}>
        <Card data={cardData} isLoading={isLoading} />
        <HomeTableWrapper defaultData={tableData} defaultDate={date} />
      </Suspense>
      {modalOpen &&
        createPortal(
          <Modal title="新增記錄" size="medium" close={handleModal}>
            <CreateRecordForm onOpenChange={handleModal} />
          </Modal>,
          document.body
        )}
    </>
  );
}
