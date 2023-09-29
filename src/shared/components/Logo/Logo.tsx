import clsx from 'clsx';
import styles from './Logo.module.scss';
import { LogoProps } from './types';

export const Logo = ({ text, Icon, uppercase, className }: LogoProps) => {
    const classes = clsx(
        styles.logo,
        uppercase && styles.uppercase,
        className
    );

    return (
        <div className={classes}>
            {Icon && <Icon />}
            <h1 className={styles['company-name']}>{text}</h1>
        </div>
    );
};
