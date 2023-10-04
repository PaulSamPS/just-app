import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DropdownProps extends ComponentPropsWithoutRef<'div'> {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    label: ReactNode;
    disabled?: boolean;
    icon?: ReactNode
}

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
