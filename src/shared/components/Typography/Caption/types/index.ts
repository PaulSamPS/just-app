import { AllHTMLAttributes } from 'react';

export interface CaptionProps extends Omit<AllHTMLAttributes<HTMLSpanElement>, 'size'> {
    weight: 'regular' | 'medium' | 'bold';
    size: 'xs' | 's' | 'm' | 'l'
    uppercase?: boolean
}
