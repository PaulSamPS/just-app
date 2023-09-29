import { AllHTMLAttributes, ReactNode } from 'react';

export interface LogoProps extends AllHTMLAttributes<HTMLDivElement> {
    Icon?: ReactNode
    text: string
    uppercase?: boolean
}
