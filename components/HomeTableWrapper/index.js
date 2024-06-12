'use client';
import { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Table from '@/components/Table';
import { getTypeData } from '@/utils/getTypeData';
import { getSortedData } from '@/utils/getSortedData';

const columns = {
  header: [
    {
      key: 'type',
      title: '類別',
    },
    {
      key: 'amount',
      title: '數量',
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
          const data = getTypeData('type', value);
          return {
            icon: data.icon,
            className: data.type,
          };
        },
        format: (value) => {
          return getTypeData('type', value)?.content;
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

export default function HomeTableWrapper({ defaultData }) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState({ key: 'type', order: 'desc' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setData(defaultData);
    setIsLoading(false);
  }, [defaultData]);

  const handleSort = (key) => {
    setSort(prev => ({
      key: key,
      order: prev.key === key ? (prev.order === 'asc' ? 'desc' : 'asc') : 'desc',
    }));
  };

  const sortedData = useMemo(() => getSortedData(data, sort.key, sort.order), [data, sort]);

  return (
    <>
      <Table
        data={sortedData}
        columns={columns}
        config={{ ...config, sort }}
        handleSort={handleSort}
        isLoading={isLoading}
      />
    </>
  );
}