'use client';
import { useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

export default function Select({
  name,
  id,
  defaultValue,
  options,
  selectRef,
  onChange,
  flex,
  color,
  rounded,
  left,
  right,
  kbd,
  size,
  mobile,
  desktop,
}) {
  const hasLeft = left ? {paddingLeft: '2rem'} : {};
  const hasRight = right ? {paddingRight: '2rem'} : {};

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.flex]: flex,
        [styles[color]]: color,
        [styles[size]]: size,
        [styles.rounded]: rounded,
      })}
      data-mobile={mobile}
      data-desktop={desktop}
    >
      {left && <div className={styles.left}>{left}</div>}
      <select
        className={clsx(styles.select)}
        name={name}
        id={id}
        ref={selectRef}
        onChange={onChange}
        defaultValue={defaultValue}
        style={{...hasLeft, ...hasRight}}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {kbd && <kbd>{kbd}</kbd>}
      {right && <div className={styles.right}>{right}</div>}
    </div>
  );
}