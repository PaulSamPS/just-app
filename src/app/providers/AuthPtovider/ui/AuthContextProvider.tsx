import { FC, PropsWithChildren, ReactElement } from 'react';
import { AppAuthContext } from '../lib/AuthContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { IAppAuthModalContext } from '../types';

export const AppAuthContextProvider: FC<PropsWithChildren & IAppAuthModalContext> = ({
    children
}): ReactElement => {
    const value = useAuthContext();

    return (
        <AppAuthContext.Provider value={value}>
            { children }
        </AppAuthContext.Provider>
    );
};
