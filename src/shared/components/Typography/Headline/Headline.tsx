import clsx from 'clsx';
import { HeadlineProps } from './types';
import styles from './Headline.module.scss';

export const Headline = ({
    children,
    weight = 'regular',
    className,
    ...restProps
}: HeadlineProps) => {
    const classes = clsx(
        styles.headline,
        styles[weight],
        className
    );

    return (
        <span {...restProps} className={classes}>
            {children}
        </span>
    );
};
