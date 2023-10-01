import styles from './ModalOverlay.module.scss';
import { ModalOverlayProps } from './model/types';

export const ModalOverlay = ({ onClose }: ModalOverlayProps) => (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
        className={styles.overlay}
        onClick={onClose}
        role='button'
        tabIndex={0}
    />
);
