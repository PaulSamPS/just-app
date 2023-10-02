import { AuthProps } from './model/types';
import { useModalAuthAction } from './model/hooks';
import {
    Portal,
    ModalContainer,
    ModalOverlay,
    ModalCloseButton,
} from '@/shared/components/Modal';

export const ModalAuth = ({ isOpen, onClose }: AuthProps) => {
    const { currentAction } = useModalAuthAction({ onClose });

    return (
        <Portal>
            <ModalContainer isOpen={isOpen} onClose={onClose}>
                <ModalOverlay onClose={onClose} />
                {currentAction}
                <ModalCloseButton onClose={onClose} />
            </ModalContainer>
        </Portal>
    );
};
