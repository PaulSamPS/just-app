import clsx from 'clsx';
import styles from './Button.module.scss';
import { ButtonProps } from './types';
import { IconSpinner } from './assets';

export const Button = ({
    className,
    children,
    appearance = 'primary',
    size = 'm',
    Icon,
    iconPosition,
    isLoading = false,
    fixed,
    ...otherProps
}: ButtonProps) => {
    const classes = clsx(
        styles.button,
        styles[appearance],
        styles[size],
        fixed && styles.fixed,
        className
    );

    return (
        <button className={classes} type='button' {...otherProps}>
            {iconPosition === 'left' && Icon && !isLoading && <Icon />}
            {iconPosition === 'left' && isLoading && <IconSpinner className={styles.spinner} />}
            {children}
            {iconPosition === 'right' && Icon && !isLoading && <Icon />}
            {iconPosition === 'right' && isLoading && <IconSpinner className={styles.spinner} />}
        </button>
    );
};
