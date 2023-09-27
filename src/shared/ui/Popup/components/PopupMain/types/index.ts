import { AllHTMLAttributes, ReactNode } from 'react';

export interface PopupMainProps extends AllHTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    closeButton?: boolean;
    children: ReactNode
}
