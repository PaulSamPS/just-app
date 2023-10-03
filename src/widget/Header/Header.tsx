import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { HeaderProps } from './types';
import { AppAuthContext } from '@/app/providers/AuthPtovider';
import { ModalAuth } from '@/widget/Modal';
import { AuthButton } from './ui/AuthButton/AuthButton';
import { userActions, userAuthDataState } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { ProfileButton } from './ui/ProfileButton/ProfileButton';

export const Header = ({ className }: HeaderProps) => {
    const { isOpen, setIsOpen } = useContext(AppAuthContext);
    const authData = useSelector(userAuthDataState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const ocCloseAuthModal = () => {
        if (setIsOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div className={clsx(styles.header, className)}>
            <Logo icon={<LogoIcon />} text='JustApp' uppercase />
            {authData ? <ProfileButton /> : <AuthButton />}
            <ModalAuth isOpen={isOpen} onClose={ocCloseAuthModal} />
        </div>
    );
};
