import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PopupLoading } from '@/widget/Popup/PopupLoading';
import { routeConfig } from './config/routerConfig';

export const AppRouter = () => {
    const routes = useMemo(() => Object.values(routeConfig), []);

    return (
        <Suspense fallback={<PopupLoading />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route key={path} path={path} element={<div className='wrapper'>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};
