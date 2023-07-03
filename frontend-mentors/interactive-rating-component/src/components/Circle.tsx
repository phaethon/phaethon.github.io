import React from 'react';

import styles from './Circle.module.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

type CircleProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  selected?: boolean;
  selectable?: boolean;
};

export default function Circle({children, onClick, selected, selectable = true}: CircleProps) {
  return (
    <div onClick={ onClick } className={ cx( 'circle', { selected: selected }, { hover: selectable } ) } >{ children }</div>
  );
}
