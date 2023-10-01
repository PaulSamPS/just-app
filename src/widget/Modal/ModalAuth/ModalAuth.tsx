import { FormProvider } from 'react-hook-form';
import { AuthProps } from './model/types';
import { usePopupAuthAction } from './model/hooks';
import { Portal, ModalContainer, ModalOverlay, ModalCloseButton } from '@/shared/components/Modal';

export const ModalAuth = ({ isOpen, onClose }: AuthProps) => {
    const { methods, currentAction } = usePopupAuthAction({ isOpen });

    return (
        <Portal>
            <ModalContainer isOpen={isOpen} onClose={onClose}>
                <ModalOverlay onClose={onClose} />
                <FormProvider {...methods}>
                    {currentAction}
                </FormProvider>
                <ModalCloseButton onClose={onClose} />
            </ModalContainer>
        </Portal>
    );
};
