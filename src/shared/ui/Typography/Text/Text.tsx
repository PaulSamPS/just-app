import clsx from 'clsx';
import { memo } from 'react';
import { TextProps } from './Text.props';
import styles from './Text.module.scss';

export const Text = memo(({
    children,
    size = 'm',
    error,
    className,
    ...restProps
}: TextProps) => {
    const classes = clsx(
        className,
        styles.text,
        styles[size],
        error && styles.error
    );

    return (
        <span {...restProps} className={classes}>
            {children}
        </span>
    );
});
