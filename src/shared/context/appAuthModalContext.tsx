import { createContext, PropsWithChildren, ReactElement, useMemo, useState } from 'react';

export interface IAppAuthModalContext {
    // eslint-disable-next-line react/no-unused-prop-types
    isOpen?: boolean
    // eslint-disable-next-line react/no-unused-prop-types
    setIsOpen?: (isOpen: boolean) => void
}

export const AppAuthContext = createContext<IAppAuthModalContext>({ isOpen: false });

export const AppAuthContextProvider = ({ isOpen, children }: PropsWithChildren<IAppAuthModalContext>): ReactElement => {
    const [isOpenState, setIsOpenState] = useState<boolean>(isOpen!);
    const setIsOpen = (isOpen: boolean) => {
        setIsOpenState(isOpen);
    };

    const value: IAppAuthModalContext = useMemo(() => ({ isOpen: isOpenState, setIsOpen }), [isOpenState]);

    return (
        <AppAuthContext.Provider value={value}>
            { children }
        </AppAuthContext.Provider>
    );
};
