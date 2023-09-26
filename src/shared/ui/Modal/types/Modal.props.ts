import { AllHTMLAttributes } from 'react';

export interface ModalProps extends AllHTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    closeIcon?: boolean;
    withHeader?: boolean
}
