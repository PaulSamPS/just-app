import { motion } from 'framer-motion';
import { Button } from '@/shared/components/Button';
import styles from './PopupDialog.module.scss';
import { PopupDialogProps } from './types';
import {
    PopupContainer,
    PopupOverlay,
    PopupCloseButton
} from '@/shared/components/Popup';
import { Headline } from '@/shared/components/Typography/Headline';
import { animatePopup } from '../constants/animate';

export const PopupDialog = ({
    isOpen,
    onClose,
    text,
    primaryButtonText,
    secondaryButtonText,
    secondaryButtonTextOnClick,
    primaryButtonOnClick,
    closeButton,
    Icon
}: PopupDialogProps) => (
    <PopupContainer isOpen={isOpen} onClose={onClose}>
        <PopupOverlay onClose={onClose} />
        <motion.div
            className={styles['popup-dialog']}
            {...animatePopup}
        >
            {Icon && <Icon className={styles.icon} />}
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
        </motion.div>
        {closeButton && <PopupCloseButton onClose={onClose} />}
    </PopupContainer>
);
