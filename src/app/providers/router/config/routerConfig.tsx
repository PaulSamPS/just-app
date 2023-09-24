import { RouteProps } from 'react-router';
import { HomePage } from '@/pages/Home';

export enum AppRoutes {
    Home = 'home',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.Home]: '/'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Home]: {
        path: RouterPath.home,
        element: <HomePage />,
    }
};
