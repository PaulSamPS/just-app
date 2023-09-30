import { Button } from '@/shared/components/Button';
import styles from './PopupDialog.module.scss';
import { PopupDialogProps } from './types';
import {
    PopupContainer,
    PopupOverlay,
    PopupContentWithOutHeader
} from '@/shared/components/Popup';
import { Headline } from '@/shared/components/Typography/Headline';

export const PopupDialog = ({
    isOpen,
    onClose,
    text,
    primaryButtonText,
    secondaryButtonText,
    secondaryButtonTextOnClick,
    primaryButtonOnClick,
    icon
}: PopupDialogProps) => (
    <PopupContainer isOpen={isOpen} onClose={onClose}>
        <PopupOverlay onClose={onClose} />
        <PopupContentWithOutHeader onClose={onClose}>
            <div className={styles['popup-dialog']}>
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
        </PopupContentWithOutHeader>
    </PopupContainer>
);
