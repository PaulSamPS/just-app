import { AnimatePresence, motion } from 'framer-motion';
import styles from './PopupContainer.module.scss';
import { animateOverlay } from '../../constant/animate';
import { Portal } from '../Portal';
import { usePopup } from '../../hooks';
import { ContainerProps } from './types';

export const PopupContainer = ({ isOpen, onClose, children }: ContainerProps) => {
    usePopup({ isOpen, onClose });

    return (
        <Portal>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.container}
                        role='dialog'
                        animate={isOpen ? 'open' : 'closed'}
                        variants={animateOverlay}
                        initial='closed'
                        exit='closed'
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </Portal>
    );
};
