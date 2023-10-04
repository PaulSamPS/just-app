import { Suspense } from 'react';
import { ModalFullWithHeaderProps } from './model/types';
import { ModalCloseButton, ModalContainer, ModalContentWithHeader, ModalOverlay } from '@/shared/components/Modal';
import { Spinner } from '@/shared/components/Spinner';

const ModalFullWithHeader = ({ isOpen, onClose, headerText, children }: ModalFullWithHeaderProps) => (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClose={onClose} />
        <Suspense fallback={<Spinner backgroundColor='white' />}>
            <ModalContentWithHeader headerText={headerText}>
                {children}
            </ModalContentWithHeader>
            <ModalCloseButton onClose={onClose} />
        </Suspense>

    </ModalContainer>
);

export default ModalFullWithHeader;
