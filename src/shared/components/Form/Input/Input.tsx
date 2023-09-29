import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, memo } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './types';

const InputComponent = forwardRef(
    ({ className, error, name, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
        <div className={clsx(className, styles.wrapper, name && styles['with-label'])}>
            {name && <label htmlFor={name} className={styles.label}>{name}</label>}
            <input
                ref={ref}
                name={name}
                className={clsx(styles.input, {
                    [styles.error]: error,
                })}
                {...props}
            />
            {error && (
                <span className={styles['error-message']}>
                    {typeof error !== 'string' ? error.message : error}
                </span>
            )}
        </div>
    )
);

export const Input = memo(InputComponent);
