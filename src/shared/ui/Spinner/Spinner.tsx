import clsx from 'clsx';
import styles from './Spinner.module.scss';
import { SpinnerProps } from './types';

export const Spinner = ({
    backgroundColor = 'inherit',
    className,
    'aria-label': ariaLabel = 'Загружается...',
}: SpinnerProps) => (
    <span
        role='status'
        aria-label={ariaLabel}
        className={clsx(styles.spinner, className)}
    >
        <div style={{ backgroundColor }} />
        <div style={{ backgroundColor }} />
        <div style={{ backgroundColor }} />
        <div style={{ backgroundColor }} />
    </span>
);
