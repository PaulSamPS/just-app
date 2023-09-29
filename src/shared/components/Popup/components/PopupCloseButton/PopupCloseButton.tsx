import { motion } from 'framer-motion';
import styles from './PopupCloseButton.module.scss';
import { CloseIcon } from '../../assets';
import { PopupCloseButtonProps } from './types';
import { animateCloseButton } from '../../constant/animate';

export const PopupCloseButton = ({ onClose }: PopupCloseButtonProps) => (
    <div className={styles.wrapper}>
        <motion.button
            className={styles['close-button']}
            onClick={onClose}
            type='button'
            {...animateCloseButton}
        >
            <CloseIcon className={styles.icon} />
        </motion.button>
    </div>
);