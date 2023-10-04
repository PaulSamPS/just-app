import { RouteProps } from 'react-router';
import { HomePage } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Profile } from '@/pages/Profile';

export type AppRoutes = 'home' | 'profile' | 'not_found'

export const RouterPath: Record<AppRoutes, string> = {
    home: '/',
    profile: 'profile',
    not_found: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    home: {
        path: RouterPath.home,
        element: <HomePage />,
    },
    profile: {
        path: RouterPath.profile,
        element: <Profile />,
    },
    not_found: {
        path: RouterPath.not_found,
        element: <NotFound />,
    },
};
