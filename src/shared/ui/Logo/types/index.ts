import { AllHTMLAttributes, FC, SVGProps } from 'react';

export interface LogoProps extends AllHTMLAttributes<HTMLDivElement> {
    Icon?: FC<SVGProps<SVGSVGElement>>
    text: string
    uppercase?: boolean
}
