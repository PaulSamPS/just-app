import React, { Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';

export const App = () => (
    <div className='app'>
        <Suspense fallback=''>
            <div className='content'>
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
