import React, { Suspense, useContext } from 'react';
import { AppRouter } from '@/app/providers/router';
import { Header } from '@/widget/Header/Header';
import { AppAuthContext } from '@/app/providers/AuthPtovider';
import { ModalAuth } from '@/widget/ModalAuth/ModalAuth';

export const App = () => {
    const { isOpen, setIsOpen } = useContext(AppAuthContext);

    const ocCloseAuthModal = () => {
        if (setIsOpen) {
            setIsOpen(false);
        }
    };

    return (

        <div className='app'>
            <Suspense fallback=''>
                <Header />
                <ModalAuth isOpen={isOpen} onClose={ocCloseAuthModal} />
                <div className='content'>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
