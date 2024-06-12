'use client';
import { useState, useEffect, useMemo, Suspense } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Filter from '@/components/Filter';
import LineChart from '@/components/LineChart';
import Table from '@/components/Table';
import DataStatus from '@/components/DataStatus';
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
  clickable: true,
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

const tabs = [
  {
    id: 1,
    name: '一個月',
    value: 'month',
  },
  {
    id: 2,
    name: '一年',
    value: 'year',
  },
  {
    id: 3,
    name: '自訂',
    value: 'custom',
  },
];

const defaultSort = { key: 'type', order: 'desc' };

export default function RecordsWrapper({ defaultData, defaultDate }) {
  const [activeTab, setActiveTab] = useState('month');

  const handleTabsClick = (value) => {
    setActiveTab(value);
  };

  const [lineChartData, setLineChartData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [sort, setSort] = useState({ key: 'type', order: 'desc' });
  const [date, setDate] = useState(defaultDate);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTableData(defaultData.tableData);
    setIsLoading(false);
  }, [defaultData]);

  useEffect(() => {
    if (activeTab === 'month') {
      setLineChartData(defaultData.lineChartData.data1);
    } else {
      setLineChartData(defaultData.lineChartData.data2);
    }
  }, [defaultData, activeTab]);

  const handleClick = () => {};

  const handleSort = (key) => {
    setSort((prev) => ({
      key: key,
      order:
        prev.key === key ? (prev.order === 'asc' ? 'desc' : 'asc') : 'desc',
    }));
  };

  const sortedData = useMemo(
    () => getSortedData(tableData, sort.key, sort.order),
    [tableData, sort]
  );

  const handleDateChange = (value) => {
    setDate(value);
  };

  useEffect(() => {
    // console.log(date);
  }, [date]);

  return (
    <>
      <Filter
        activeTab={activeTab}
        tabs={tabs}
        handleTabsClick={handleTabsClick}
        defaultDate={date}
        handleDateChange={handleDateChange}
      />
      <Suspense
        fallback={<DataStatus content="載入中..." type="loading" />}
      ></Suspense>
      {activeTab === 'month' ? (
        <LineChart
          chartData={lineChartData}
          activeTab={activeTab}
        />
      ) : (
        <LineChart
          chartData={lineChartData}
          activeTab={activeTab}

        />
      )}
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
