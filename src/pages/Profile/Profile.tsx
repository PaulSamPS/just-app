import { useState } from 'react';
import { ModalFullWithHeader } from '@/entities/Modal/ModalFullWithHeader';
import styles from './Profile.module.scss';
import { Title } from '@/shared/components/Typography/Title';
import { Button } from '@/shared/components/Button';
import { UploadAvatar } from '@/features/Profile/UploadAvatar';

const Profile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.profile}>
            <Title weight='regular' size='h2'>Профиль</Title>
            <Button size='m' appearance='primary' onClick={() => setIsOpen(true)}>Avatar</Button>
            <ModalFullWithHeader isOpen={isOpen} onClose={onClose} headerText='Загрузка аватара'>
                <UploadAvatar />
            </ModalFullWithHeader>
        </div>
    );
};

export default Profile;
