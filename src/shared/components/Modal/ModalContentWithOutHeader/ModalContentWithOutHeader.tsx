import { motion } from 'framer-motion';
import styles from './ModalContentWithOutHeader.module.scss';
import { animateContent } from './model/constant/animate';
import { ModalContentWithOutHeaderProps } from './model/types';

export const ModalContentWithOutHeader = ({ children }: ModalContentWithOutHeaderProps) => (
    <motion.div
        className={styles.content}
        {...animateContent}
    >
        <div className={styles.body}>
            {children}
        </div>
    </motion.div>
);
