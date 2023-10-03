import { FC, SVGProps } from 'react';

export interface DropDownItemType {
    path: string
    label: string
    Icon: FC<SVGProps<SVGSVGElement>>
    onNavigate?: (path: string, text?: string) => void
    logout?: () => void
}
