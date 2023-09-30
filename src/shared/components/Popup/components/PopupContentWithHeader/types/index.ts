import { ReactNode } from 'react';

export interface PopupContentWithHeaderProps {
    headerText: string
    children: ReactNode
    onClose: () => void
}
