import React from 'react';
import styles from './Message.module.css';

type MessageProps = {
  children: React.ReactNode;
};

export default function Message({ children }: MessageProps) {
  return (
    <div className={ styles.messageBlock } ><span className={ styles.message } >{ children }</span></div>
  );
}
