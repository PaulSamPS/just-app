import { ModalContainer, ModalOverlay, Portal } from '@/shared/components/Modal';
import styles from './ModalLoading.module.scss';
import { Spinner } from '@/shared/components/Spinner';

export const ModalLoading = () => (
    <Portal>
        <ModalContainer isOpen onClose={() => {}}>
            <ModalOverlay onClose={() => {}} />
            <div className={styles.loader}>
                <Spinner backgroundColor='white' />
            </div>
        </ModalContainer>
    </Portal>
);
