import clsx from 'clsx';
import { memo } from 'react';
import styles from './LoaderPage.module.scss';
import { Spinner } from '@/shared/ui/Spinner';

interface PageLoaderProps {
    className?: string;
}

export const LoaderPage = memo(({ className }: PageLoaderProps) => (
    <div className={clsx(styles['page-loader'], className)}>
        <Spinner />
    </div>
));
