import { useCallback, useEffect } from 'react';
import { usePopupProps } from '../types';

export const usePopup = ({ isOpen, onClose }: usePopupProps): void => {
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        },
        [onClose]
    );
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
};
