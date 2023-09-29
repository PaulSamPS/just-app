import { motion } from 'framer-motion';
import styles from './PopupMain.module.scss';
import { PopupMainProps } from './types';
import {
    PopupContainer,
    PopupOverlay,
    PopupCloseButton
} from '@/shared/components/Popup';
import { Headline } from '@/shared/components/Typography/Headline';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { animatePopup } from '../constants/animate';

export const PopupMain = ({
    isOpen,
    closeButton,
    onClose,
    headerText,
}: PopupMainProps) => (
    <PopupContainer isOpen={isOpen} onClose={onClose}>
        <PopupOverlay onClose={onClose} />
        <motion.div
            className={styles['popup-main']}
            {...animatePopup}
        >
            <div className={styles.header}>
                <Headline weight='medium' className={styles.headline}>{headerText}</Headline>
            </div>
            <div className={styles.body}>
                <Logo text='JustApp' Icon={<LogoIcon />} uppercase />
            </div>
        </motion.div>
        {closeButton && <PopupCloseButton onClose={onClose} />}
    </PopupContainer>
);
