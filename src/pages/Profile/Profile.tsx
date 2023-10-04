import styles from './Profile.module.scss';
import { Title } from '@/shared/components/Typography/Title';

const Profile = () => (
    <div className={styles.profile}>
        <Title weight='regular' size='h2'>Профиль</Title>
    </div>
);

export default Profile;
