import clsx from 'clsx';
import styles from './ErrorPage.module.scss';
import { PageErrorProps } from './types';

export const ErrorPage = ({ className }: PageErrorProps) => {
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
};
