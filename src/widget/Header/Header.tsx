import clsx from 'clsx';
import { useContext } from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { Button } from '@/shared/components/Button';
import { HeaderProps } from './types';
import { AppAuthContext } from '@/shared/context/appAuthModalContext';

export const Header = ({ className }: HeaderProps) => {
    const { setIsOpen } = useContext(AppAuthContext);

    const handleOpenAuthModal = () => {
        if (setIsOpen) {
            setIsOpen(true);
        }
    };

    return (
        <div className={clsx(styles.header, className)}>
            <Logo icon={<LogoIcon />} text='JustApp' uppercase />
            <Button
                size='m'
                appearance='clear'
                className={styles.auth}
                onClick={handleOpenAuthModal}
            >
                Войти
            </Button>
        </div>
    );
};
