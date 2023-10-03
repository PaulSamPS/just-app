import { useMemo, useState } from 'react';
import { IAppAuthModalContext } from '../types';

export const useAuthContext = () => {
    const [isOpenState, setIsOpenState] = useState<boolean>(false);
    const setIsOpen = (isOpen: boolean) => {
        setIsOpenState(isOpen);
    };

    const value: IAppAuthModalContext = useMemo(() => ({ isOpen: isOpenState, setIsOpen }), [isOpenState]);

    return value;
};
