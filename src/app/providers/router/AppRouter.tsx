import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './config/routerConfig';
import { LoaderPage } from '@/widget/LoaderPage';

export const AppRouter = () => {
    const routes = useMemo(() => Object.values(routeConfig), []);

    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route key={path} path={path} element={<div className='wrapper'>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};
