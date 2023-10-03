import { Suspense } from 'react';
import { AuthProps } from './model/types';
import { useModalAuthAction } from './model/hooks';
import {
    Portal,
    ModalContainer,
    ModalOverlay,
    ModalCloseButton,
} from '@/shared/components/Modal';
import { Spinner } from '@/shared/components/Spinner';

export const ModalAuth = ({ isOpen, onClose }: AuthProps) => {
    const { currentAction } = useModalAuthAction({ isOpen, onClose });

    return (
        <Portal>
            <ModalContainer isOpen={isOpen} onClose={onClose}>
                <ModalOverlay onClose={onClose} />
                <Suspense fallback={<Spinner backgroundColor='white' />}>
                    {currentAction}
                    <ModalCloseButton onClose={onClose} />
                </Suspense>
            </ModalContainer>
        </Portal>
    );
};
