import clsx from 'clsx';
import { SubheadProps } from './types';
import styles from './Subhead.module.scss';

export const Subhead = ({
    children,
    weight = 'regular',
    className,
    ...restProps
}: SubheadProps) => {
    const classes = clsx(
        styles.subhead,
        styles[weight],
        className
    );

    return (
        <span {...restProps} className={classes}>
            {children}
        </span>
    );
};
