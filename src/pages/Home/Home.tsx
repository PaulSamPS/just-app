import clsx from 'clsx';
import { useContext, useState } from 'react';
import styles from './Home.module.scss';
import { ModalAuth } from '@/widget/Modal';
import { Button } from '@/shared/components/Button';
import { AppAuthContext } from '@/shared/context/appAuthModalContext';

interface HomeProps {
    className?: string
}

const Home = ({ className }: HomeProps) => {
    const { isOpen, setIsOpen } = useContext(AppAuthContext);

    const onOpenPopupAuth = () => {
        if (setIsOpen) {
            setIsOpen(true);
        }
    };
    const onClosePopupAuth = () => {
        if (setIsOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div className={clsx(styles.home, className)}>
            <Button size='m' appearance='primary' onClick={onOpenPopupAuth}>Nodal</Button>
            <ModalAuth isOpen={isOpen!} onClose={onClosePopupAuth} />
        </div>
    );
};

export default Home;
