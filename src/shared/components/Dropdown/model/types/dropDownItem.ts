import { ReactNode } from 'react';

 interface DropDownItemType {
    path: string
    label: string
    icon: ReactNode
    logout?: () => void
}

export interface DropDownItemList {
    items: DropDownItemType[]
    onNavigate?: (path: string, text?: string) => void
}
