import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => {};
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={ styles.button } onClick={ onClick }>{ children }</button>
  );
}
