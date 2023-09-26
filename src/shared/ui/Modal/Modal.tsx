import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.scss';
import { CloseIcon } from './assets';
import { animateOverlay, animateModal, animateContent } from './constant';
import { useModal } from './hooks';
import { ModalProps } from './types';

export const Modal = ({ className, children, isOpen, onClose, closeIcon = false }: ModalProps) => {
    const { onContentClick } = useModal({ isOpen, onClose });

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    onClick={onClose}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={animateOverlay}
                    initial='closed'
                    exit='closed'
                >
                    <motion.div
                        className={clsx(styles.modal, isOpen && styles.opened)}
                        {...animateModal}
                    >
                        <motion.div
                            className={clsx(styles.content, className)}
                            onClick={onContentClick}
                            {...animateContent}
                        >
                            {children}
                            {closeIcon && <div className={styles.close}><CloseIcon onClick={onClose} /></div>}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
