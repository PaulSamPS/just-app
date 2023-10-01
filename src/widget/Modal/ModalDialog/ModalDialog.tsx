import {
    ModalContainer,
    ModalOverlay,
    ModalContentWithOutHeader, ModalCloseButton
} from '@/shared/components/Modal';
import { Button } from '@/shared/components/Button';
import styles from './ModalDialog.module.scss';
import { ModalDialogProps } from './model/types';
import { Headline } from '@/shared/components/Typography/Headline';

export const ModalDialog = ({
    isOpen,
    onClose,
    text,
    primaryButtonText,
    secondaryButtonText,
    secondaryButtonTextOnClick,
    primaryButtonOnClick,
    icon
}: ModalDialogProps) => (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClose={onClose} />
        <ModalContentWithOutHeader>
            <div className={styles.dialog}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <Headline weight='medium' className={styles.title}>{text}</Headline>
                <div className={styles.actions}>
                    <Button
                        size='m'
                        appearance='primary'
                        onClick={primaryButtonOnClick}
                    >
                        {primaryButtonText}
                    </Button>
                    <Button
                        size='m'
                        appearance='secondary'
                        onClick={secondaryButtonTextOnClick}
                    >
                        {secondaryButtonText}
                    </Button>
                </div>
            </div>
        </ModalContentWithOutHeader>
        <ModalCloseButton onClose={onClose} />
    </ModalContainer>
);
