import { AllHTMLAttributes } from 'react';

export interface HeadlineProps extends AllHTMLAttributes<HTMLSpanElement> {
    weight: 'regular' | 'medium'
}
