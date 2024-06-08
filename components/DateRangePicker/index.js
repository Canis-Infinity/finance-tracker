'use client';
import { useRef, useState } from 'react';
import styles from './index.module.css';
import Input from '@/components/Input';
import { TbArrowsLeftRight } from "react-icons/tb";

export default function DateRangePicker({ date, onChange }) {
  const [from, setFrom] = useState(date.from);
  const [to, setTo] = useState(date.to);
  const fromRef = useRef();
  const toRef = useRef();
  const handleDateFromChange = () => {
    const from = fromRef.current.value;
    const to = toRef.current.value;
    console.log('handleDateFromChange', from, to);
    setFrom(from);
    setTo(to);
    onChange({ from, to });
  };
  const handleDateToChange = () => {
    const from = fromRef.current.value;
    const to = toRef.current.value;
    console.log('handleDateToChange', from, to);
    setFrom(from);
    setTo(to);
    onChange({ from, to });
  };

  return (
    <div className={styles.wrapper}>
      <Input type="date" name="fromDate" id="fromDate" defaultValue={date.from} onChange={handleDateFromChange} max={to} inputRef={fromRef} />
      <TbArrowsLeftRight />
      <Input type="date" name="toDate" id="toDate" defaultValue={date.to} onChange={handleDateToChange} min={from} inputRef={toRef} />
    </div>
  )
}