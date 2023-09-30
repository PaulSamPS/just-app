import { motion } from 'framer-motion';
import styles from './PopupContentWithHeader.module.scss';
import { animatePopupContent } from '../../constant/animate';
import { PopupContentWithHeaderProps } from './types';
import { PopupCloseButton } from '@/shared/components/Popup';

export const PopupContentWithHeader = ({ headerText, onClose, children }: PopupContentWithHeaderProps) => (
    <>
        <motion.div
            className={styles['popup-content']}
            {...animatePopupContent}
        >
            <div className={styles.header}>
                <span>{headerText}</span>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </motion.div>
        <PopupCloseButton onClose={onClose} />
    </>

);
