import { MouseEvent } from 'react';

export interface useModalProps {
    isOpen: boolean
    onClose: () => void
}

export interface useModalReturn {
    onContentClick: (e: MouseEvent) => void
}
