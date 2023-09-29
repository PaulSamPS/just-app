import styles from './ErrorPage.module.scss';
import { Button } from '@/shared/components/Button';
import { Headline } from '@/shared/components/Typography/Headline';

export const ErrorPage = () => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={styles['page-error']}>
            <Headline weight='medium'>Что-то пошло не так</Headline>
            <Button size='m' appearance='primary' onClick={reloadPage} type='button'>
                Обновить
            </Button>
        </div>
    );
};
