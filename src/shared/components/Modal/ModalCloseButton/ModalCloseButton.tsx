import { motion } from 'framer-motion';
import styles from './ModalCloseButton.module.scss';
import { CloseIcon } from './model/assets';
import { ModalCloseButtonProps } from './model/types';
import { animateCloseButton } from './model/constant/animate';

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => (
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
