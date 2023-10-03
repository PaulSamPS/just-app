import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import styles from './AppLink.module.scss';

type Appearance = 'primary' | 'secondary'
interface AppLinkProps extends LinkProps {
    theme?: Appearance
}

const appearanceMapper: Record<Appearance, string> = {
    primary: 'primary',
    secondary: 'secondary',
};

export const AppLink = memo(({
    className,
    children,
    to,
    theme = 'primary',
    ...otherProps
}: AppLinkProps) => (
    <Link to={to} className={clsx(styles['app-link'], styles[appearanceMapper[theme]], className)} {...otherProps}>
        {children}
    </Link>
));
