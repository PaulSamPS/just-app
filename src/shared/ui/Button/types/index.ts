import { ButtonHTMLAttributes, FC, SVGProps } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: 's' | 'm' | 'l'
    appearance:
        'primary' |
        'secondary' |
        'outline' |
        'commerce' |
        'overlay-primary' |
        'overlay-secondary' |
        'overlay-outline' |
        'clear'
    Icon?: FC<SVGProps<SVGSVGElement>>
    iconPosition?: 'left' | 'right'
    isLoading?: boolean
    fixed?: boolean
}
