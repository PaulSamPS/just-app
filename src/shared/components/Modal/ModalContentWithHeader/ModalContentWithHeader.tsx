import { motion } from 'framer-motion';
import styles from './ModalContentWithHeader.module.scss';
import { animateContent } from './model/constant/animate';
import { ModalContentWithHeaderProps } from './model/types';

export const ModalContentWithHeader = ({ headerText, children }: ModalContentWithHeaderProps) => (
    <motion.div
        className={styles.content}
        {...animateContent}
    >
        <div className={styles.header}>
            <span>{headerText}</span>
        </div>
        <div className={styles.body}>
            {children}
        </div>
    </motion.div>
);
