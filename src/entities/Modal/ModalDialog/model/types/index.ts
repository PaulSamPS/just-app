import { ReactNode } from 'react';

export interface ModalDialogProps {
    isOpen: boolean;
    onClose: () => void;
    text: string
    primaryButtonText: string
    primaryButtonOnClick: () => void
    secondaryButtonText: string
    secondaryButtonTextOnClick: () => void
    icon?: ReactNode
}
