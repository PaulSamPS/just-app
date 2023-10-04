import { ReactNode } from 'react';

export type ModalFullWithHeaderProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    headerText: string
}
