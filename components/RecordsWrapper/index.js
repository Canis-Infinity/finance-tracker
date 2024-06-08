'use client';
import { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Table from '@/components/Table';
import Filter from '@/components/Filter';
import { getTypeData } from '@/utils/getTypeData';

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

export default function RecordsWrapper({ defaultData, defaultDate }) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState({ key: 'type', order: 'desc' });
  const [date, setDate] = useState(defaultDate);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setData(defaultData);
    setIsLoading(false);
  }, [defaultData]);

  const handleClick = () => {};

  const handleSort = (key) => {
    setSort(prev => ({
      key: key,
      order: prev.key === key ? (prev.order === 'asc' ? 'desc' : 'asc') : 'desc',
    }));
  };

  const sortedData = useMemo(() => {
    const sorted = [...data];
    if (sort.order === 'asc') {
      return sorted.sort((a, b) => (a[sort.key] > b[sort.key] ? 1 : -1));
    }
    return sorted.sort((a, b) => (a[sort.key] > b[sort.key] ? -1 : 1));
  }, [data, sort]);

  const handleDateChange = (value) => {
    setDate(value);
  };

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <Filter defaultDate={date} handleDateChange={handleDateChange} />
      <Table
        data={sortedData}
        columns={columns}
        config={{ ...config, sort }}
        handleClick={handleClick}
        handleSort={handleSort}
        isLoading={isLoading}
      />
    </>
  );
}