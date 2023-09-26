import React, { Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';
import { Header } from '@/widget/Header/Header';

export const App = () => (
    <div className='app'>
        <Suspense fallback=''>
            <Header />
            <div className='content'>
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
