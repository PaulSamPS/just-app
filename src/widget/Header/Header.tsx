import clsx from 'clsx';
import styles from './Header.module.scss';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { Button } from '@/shared/components/Button';
import { HeaderProps } from './types';

export const Header = ({ className }: HeaderProps) => (
    <div className={clsx(styles.header, className)}>
        <Logo Icon={<LogoIcon />} text='JustApp' uppercase />
        <Button
            size='m'
            appearance='clear'
            className={styles.auth}
        >
            Войти
        </Button>
    </div>
);
