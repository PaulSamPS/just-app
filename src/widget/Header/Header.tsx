import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { AppAuthContext } from '@/app/providers/AuthPtovider';
import { ModalAuth } from './ui/ModalAuth/ModalAuth';
import { AuthButton } from './ui/AuthButton/AuthButton';
import { userActions, userAuthDataState } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Dropdown, DropdownItemList } from '@/shared/components/Dropdown';

const links = [
    { path: '/account-settings', label: 'Account settings', icon: LogoIcon },
    { path: '/support', label: 'Support', icon: LogoIcon },
    { path: '/license', label: 'License', icon: LogoIcon },
    { path: '/sign-out', label: 'Sign out', icon: LogoIcon },
];

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
            <Logo icon={<LogoIcon />} text='JustApp' uppercase />
            {authData ? (
                <Dropdown label='Профиль' open={isMenu} setOpen={setIsMenu} className={styles.dropdown}>
                    {links.map((i) => (
                        <DropdownItemList
                            key={i.path}
                            path={i.path}
                            label={i.label}
                            Icon={i.icon}
                            onNavigate={onNavigate}
                        />
                    ))}
                </Dropdown>
            ) : <AuthButton />}
            <ModalAuth isOpen={isOpen} onClose={ocCloseAuthModal} />
        </div>
    );
};
