import clsx from 'clsx';
import { CaptionProps } from './types';
import styles from './Caption.module.scss';

export const Caption = ({
    children,
    weight = 'regular',
    size = 'm',
    uppercase,
    className,
    ...restProps
}: CaptionProps) => {
    const classes = clsx(
        styles.caption,
        styles[weight],
        styles[size],
        uppercase && styles.uppercase,
        className
    );

    return (
        <span {...restProps} className={classes}>
            {children}
        </span>
    );
};
