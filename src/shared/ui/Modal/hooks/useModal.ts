import { MouseEvent, useCallback, useEffect } from 'react';
import { useModalProps, useModalReturn } from '../types';

export const useModal = ({ isOpen, onClose }: useModalProps): useModalReturn => {
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        },
        [onClose]
    );

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return { onContentClick };
};
