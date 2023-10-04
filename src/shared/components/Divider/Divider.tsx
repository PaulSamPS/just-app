import React from 'react';
import cx from 'clsx';
import styles from './Divider.module.scss';

export interface DividerProps extends React.AllHTMLAttributes<HTMLHRElement> {}

export const Divider = ({
    className,
    ...restProps
}: DividerProps) => (
    <hr className={cx(styles.divider, className)} {...restProps} />
);
