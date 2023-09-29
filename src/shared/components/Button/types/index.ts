import { ButtonHTMLAttributes, ReactNode } from 'react';

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
    before?:ReactNode
    after?: ReactNode
    isLoading?: boolean
    stretched?: boolean
}
