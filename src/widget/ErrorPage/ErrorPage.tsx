import clsx from 'clsx';
import { AllHTMLAttributes, memo } from 'react';
import styles from './ErrorPage.module.scss';

interface PageErrorProps extends AllHTMLAttributes<HTMLDivElement> {}

export const ErrorPage = memo(({ className }: PageErrorProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={clsx(styles['page-error'], className)}>
            <p>Что-то пошло не так</p>
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    );
});
