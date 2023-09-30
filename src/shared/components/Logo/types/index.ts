import { AllHTMLAttributes, ReactNode } from 'react';

export interface LogoProps extends AllHTMLAttributes<HTMLDivElement> {
    icon?: ReactNode
    text: string
    uppercase?: boolean
}
