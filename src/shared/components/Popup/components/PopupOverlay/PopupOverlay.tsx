import styles from './PopupOverlay.module.scss';
import { PopupOverlayProps } from './types';

export const PopupOverlay = ({ onClose }: PopupOverlayProps) => (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
        className={styles.overlay}
        onClick={onClose}
        role='button'
        tabIndex={0}
    />
);
