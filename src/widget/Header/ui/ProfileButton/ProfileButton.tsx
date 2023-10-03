import styles from './ProfileButton.module.scss';
import { Button } from '@/shared/components/Button';

export const ProfileButton = () => (
    <Button
        size='m'
        appearance='clear'
        className={styles.profile}
    >
        Профиль
    </Button>
);
