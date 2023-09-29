import clsx from 'clsx';
import styles from './LoaderPage.module.scss';
import { Spinner } from '@/shared/components/Spinner';
import { LoaderPageProps } from './types';

export const LoaderPage = ({ className }: LoaderPageProps) => (
    <div className={clsx(styles['page-loader'], className)}>
        <Spinner />
    </div>
);
