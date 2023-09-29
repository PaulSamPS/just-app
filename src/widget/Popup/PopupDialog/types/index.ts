import { FC, SVGProps } from 'react';

export interface PopupDialogProps {
    isOpen: boolean;
    onClose: () => void;
    closeButton?: boolean;
    text: string
    primaryButtonText: string
    primaryButtonOnClick: () => void
    secondaryButtonText: string
    secondaryButtonTextOnClick: () => void
    Icon?: FC<SVGProps<SVGSVGElement>>
}
