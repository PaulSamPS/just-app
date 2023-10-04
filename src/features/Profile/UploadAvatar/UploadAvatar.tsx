import styles from './UploadAvatar.module.scss';
import { Divider } from '@/shared/components/Divider';
import { SelectFile } from '@/shared/components/Form/SelectFile';
import { Text } from '@/shared/components/Typography/Text';
import { Button } from '@/shared/components/Button';
import { useUploadAvatar } from './model/hooks/useUploadAvatar';

const UploadAvatar = () => {
    const { previewAvatar, file, selectFile, uploadFile } = useUploadAvatar();

    return (
        <div className={styles['upload-avatar']}>
            <div className={styles.preview}>
                {previewAvatar ? (
                    <img
                        src={previewAvatar}
                        alt='avatar'
                    />
                ) : (
                    <div className={styles['empty-avatar']}>
                        <Text weight='regular'>Выберите файл</Text>
                    </div>
                )}
            </div>
            <Divider className={styles.divider} />
            <SelectFile
                chooseText='Выберите аватар'
                chooseTextDone='Аватар выбран'
                fileSelected={previewAvatar!}
                selectFile={selectFile}
                id='avatar'
            />
            <Button
                size='m'
                appearance='primary'
                disabled={!file}
                onClick={uploadFile}
            >
                Загрузить
            </Button>
        </div>
    );
};

export default UploadAvatar;
