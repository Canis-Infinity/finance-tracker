'use client';
import { useState } from 'react';
import { Roboto_Mono } from 'next/font/google';
import clsx from 'clsx';
import styles from './index.module.css';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function Input({
  type,
  name,
  id,
  placeholder,
  defaultValue,
  inputRef,
  onChange,
  onBlur,
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
  passWordToggle,
  flex,
  color,
  rounded,
  left,
  right,
  kbd,
  size,
  mobile,
  desktop,
  min,
  max,
}) {
  const [cursor, setCursor] = useState('pointer');

  if (['input', 'search'].includes(type)) {
    setCursor('text')
  }

  const handleClick = (event) => {
    event.stopPropagation();
    const input = event.target.querySelector('input') || event.target.querySelector('select') || event.target;
    const typeOfInput = input.tagName.toLowerCase();
    if (typeOfInput === 'input') {
      input.focus();
    } else if (typeOfInput === 'select') {
      input.click();
    }
  };

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.flex]: flex,
        [styles[color]]: color,
        [styles[size]]: size,
        [styles.rounded]: rounded,
      })}
      style={{ cursor: cursor }}
      onClick={handleClick}
      data-mobile={mobile}
      data-desktop={desktop}
    >
      {left && <div className={clsx(styles.left, robotoMono.className)}>{left}</div>}
      <input
        className={clsx(styles.input)}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        defaultValue={defaultValue}
        min={min}
        max={max}
      />
      {kbd && <kbd>{kbd}</kbd>}
      {right && <div className={clsx(styles.right, robotoMono.className)} onClick={passWordToggle} style={passWordToggle ? {pointerEvents: 'all'} : {}}>{right}</div>}
    </div>
  );
}