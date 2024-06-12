'use client';
import { useState } from 'react';
import styles from './index.module.css';
import Tabs from '@/components/Tabs';
import DateRangePicker from '@/components/DateRangePicker';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { RiExpandUpDownFill } from "react-icons/ri";
import dayjs from 'dayjs';

const years = [
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
  { value: '2026', label: '2026' },
  { value: '2027', label: '2027' },
  { value: '2028', label: '2028' },
  { value: '2029', label: '2029' },
  { value: '2030', label: '2030' },
  { value: '2031', label: '2031' },
  { value: '2032', label: '2032' },
  { value: '2033', label: '2033' },
  { value: '2034', label: '2034' },
  { value: '2035', label: '2035' },
  { value: '2036', label: '2036' },
  { value: '2037', label: '2037' },
  { value: '2038', label: '2038' },
  { value: '2039', label: '2039' },
  { value: '2040', label: '2040' },
];

export default function Filter({ activeTab, tabs, handleTabsClick, defaultDate, handleDateChange }) {
  return (
    <div className={styles.wrapper}>
      <Tabs tabs={tabs} handleClick={handleTabsClick} activeTab={activeTab} />
      {activeTab === 'month' && <Input type="month" name="month" id="month" defaultValue={defaultDate.month} />}
      {activeTab === 'year' && <Select type="year" name="year" id="year" options={years} right={<RiExpandUpDownFill />} />}
      {activeTab === 'custom' && <DateRangePicker date={defaultDate} onChange={handleDateChange} />}
      {/* <DateRangePicker date={defaultDate} onChange={handleDateChange} />
      <Input type="month" name="month" id="month" />
      <Select type="year" name="year" id="year" options={years} right={<RiExpandUpDownFill />} /> */}
    </div>
  );
}