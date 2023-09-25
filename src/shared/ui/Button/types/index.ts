import React, { ButtonHTMLAttributes, FC, ReactNode, SVGProps } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: 's' | 'm' | 'l'
    appearance:
        'primary' |
        'secondary' |
        'outline' |
        'commerce' |
        'overlay-primary' |
        'overlay-secondary' |
        'overlay-outline'
    Icon?: FC<SVGProps<SVGSVGElement>>
    iconPosition?: 'left' | 'right'
    isLoading?: boolean
    fixed?: boolean
}
