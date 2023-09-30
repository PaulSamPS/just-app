import { motion } from 'framer-motion';
import styles from './PopupContentWithOutHeader.module.scss';
import { animatePopupContent } from '../../constant/animate';
import { PopupContentWithOutHeaderProps } from './types';
import { PopupCloseButton } from '@/shared/components/Popup';

export const PopupContentWithOutHeader = ({ onClose, children }: PopupContentWithOutHeaderProps) => (
    <>
        <motion.div
            className={styles['popup-content']}
            {...animatePopupContent}
        >
            <div className={styles.body}>
                {children}
            </div>
        </motion.div>
        <PopupCloseButton onClose={onClose} />
    </>

);
