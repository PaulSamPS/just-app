import styles from './PopupLoading.module.scss';
import { Spinner } from '@/shared/components/Spinner';
import { PopupContainer, PopupOverlay, Portal } from '@/shared/components/Popup';

export const PopupLoading = () => (
    <Portal>
        <PopupContainer isOpen onClose={() => {}}>
            <PopupOverlay onClose={() => {}} />
            <div className={styles['page-loader']}>
                <Spinner backgroundColor='white' />
            </div>
        </PopupContainer>
    </Portal>
);
