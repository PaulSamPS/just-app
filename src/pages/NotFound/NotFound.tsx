import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';
import { Title } from '@/shared/components/Typography/Title';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { Button } from '@/shared/components/Button';

const NotFound = () => {
    const navigate = useNavigate();

    const onNavigateToMain = () => {
        navigate('/');
    };

    return (
        <div className={styles['not-found']}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Logo text='' icon={<LogoIcon />} uppercase />
                    <Title weight='regular' size='h2'>Страница не найдена</Title>
                </div>
                <Button size='m' appearance='primary' onClick={onNavigateToMain}>На главную</Button>
            </div>
        </div>
    );
};

export default NotFound;
