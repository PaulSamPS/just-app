import { AllHTMLAttributes } from 'react';

export interface SubheadProps extends AllHTMLAttributes<HTMLSpanElement> {
    weight: 'regular' | 'medium' | 'bold';
}
