import { ReactNode } from 'react';

export interface ModalContainerProps {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export interface useModalProps extends Omit<ModalContainerProps, 'children'> {}
