import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon, LogoutIcon, ProfileIcon } from '@/shared/assets';
import { AppAuthContext } from '@/app/providers/AuthPtovider';
import { ModalAuth } from './ui/ModalAuth/ModalAuth';
import { AuthButton } from './ui/AuthButton/AuthButton';
import { userActions, userAuthDataState } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Dropdown, DropdownItemList } from '@/shared/components/Dropdown';

export const Header = () => {
    const { isOpen, setIsOpen } = useContext(AppAuthContext);
    const [isMenu, setIsMenu] = useState(false);
    const authData = useSelector(userAuthDataState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onNavigate = (to: string, text?: string) => {
        if (text === 'Выйти') {
            dispatch(userActions.logout());
        }
        if (to !== pathname || pathname === '/') {
            navigate(to);
        }
    };

    const onNavigateLogoTo = () => {
        navigate('/');
    };

    const links = [
        { path: '/profile', label: 'Профиль', icon: <ProfileIcon /> },
        { path: '/', label: 'Выйти', icon: <LogoutIcon /> },
    ];

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const ocCloseAuthModal = () => {
        if (setIsOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.header}>
            <Logo
                icon={<LogoIcon />}
                text='JustApp'
                uppercase
                onClick={onNavigateLogoTo}
                role='button'
                className={styles.logo}
            />
            {authData ? (
                <Dropdown
                    label={authData.username}
                    icon={<LogoIcon />}
                    open={isMenu}
                    setOpen={setIsMenu}
                    className={styles.dropdown}
                >
                    <DropdownItemList items={links} onNavigate={onNavigate} />
                </Dropdown>
            ) : <AuthButton />}
            <ModalAuth isOpen={isOpen} onClose={ocCloseAuthModal} />
        </div>
    );
};
