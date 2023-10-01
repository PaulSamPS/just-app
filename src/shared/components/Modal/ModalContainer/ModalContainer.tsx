import { AnimatePresence, motion } from 'framer-motion';
import styles from './ModalContainer.module.scss';
import { animateContainer } from './model/constant/animate';
import { Portal } from '../Portal';
import { useModal } from './model/hooks';
import { ModalContainerProps } from './model/types';

export const ModalContainer = ({ isOpen, onClose, children }: ModalContainerProps) => {
    useModal({ isOpen, onClose });

    return (
        <Portal>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.container}
                        role='dialog'
                        animate={isOpen ? 'open' : 'closed'}
                        variants={animateContainer}
                        initial='closed'
                        exit='closed'
                    >
                        <div className={styles.wrapper}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Portal>
    );
};
