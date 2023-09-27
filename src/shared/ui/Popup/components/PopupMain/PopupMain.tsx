import { motion } from 'framer-motion';
import styles from './PopupMain.module.scss';
import { animatePopup } from '../../constant';
import { PopupContainer } from '../PopupContainer';
import { PopupOverlay } from '../PopupOverlay';
import { PopupCloseButton } from '../PopupCloseButton';
import { PopupMainProps } from './types';

export const PopupMain = ({ isOpen, closeButton, onClose, children }: PopupMainProps) => (
    <PopupContainer isOpen={isOpen} onClose={onClose}>
        <PopupOverlay onClose={onClose} />
        <motion.div
            className={styles['popup-main']}
            {...animatePopup}
        >
            {children}
        </motion.div>
        {closeButton && <PopupCloseButton onClose={onClose} />}
    </PopupContainer>
);
