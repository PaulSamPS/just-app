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
            <button onClick={reloadPage} type='button'>
                Обновить страницу
            </button>
        </div>
    );
};
