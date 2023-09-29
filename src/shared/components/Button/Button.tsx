import clsx from 'clsx';
import styles from './Button.module.scss';
import { ButtonProps } from './types';
import { IconSpinner } from './assets';

export const Button = ({
    className,
    children,
    appearance = 'primary',
    size = 'm',
    before,
    after,
    isLoading = false,
    stretched,
    ...otherProps
}: ButtonProps) => {
    const classes = clsx(
        styles.button,
        stretched && styles.stretched,
        styles[appearance],
        styles[size],
        className
    );

    return (
        <button
            className={classes}
            type='button'
            {...otherProps}
        >
            {
                isLoading && (
                    <span className={styles['spinner-wrapper']}>
                        <IconSpinner className={styles.spinner} />
                    </span>
                )
            }
            {
                before && (
                    <span className={clsx(
                        styles.icon,
                        isLoading && styles.hidden,
                    )}
                    >
                        {before}
                    </span>
                )
            }
            <span
                className={clsx(
                    styles.content,
                    isLoading && styles.hidden,
                )}
            >
                {children}
            </span>
            {
                after && (
                    <span className={clsx(
                        styles.icon,
                        isLoading && styles.hidden,
                    )}
                    >
                        {after}
                    </span>
                )
            }
        </button>
    );
};
