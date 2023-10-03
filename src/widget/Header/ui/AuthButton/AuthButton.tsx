import { useContext } from 'react';
import styles from './AuthButton.module.scss';
import { Button } from '@/shared/components/Button';
import { AppAuthContext } from '@/app/providers/AuthPtovider';

export const AuthButton = () => {
    const { setIsOpen } = useContext(AppAuthContext);

    const onOpenAuthModal = () => {
        if (setIsOpen) {
            setIsOpen(true);
        }
    };

    return (
        <Button
            size='m'
            appearance='clear'
            className={styles.auth}
            onClick={onOpenAuthModal}
        >
            Войти
        </Button>
    );
};
