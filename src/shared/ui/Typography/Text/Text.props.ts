import React, { ReactNode } from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: ReactNode
    size: 'xs' |'s' | 'm' |'l';
    error?: boolean;
    className?: string
}
