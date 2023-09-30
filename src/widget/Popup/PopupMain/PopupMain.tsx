import { PopupMainProps } from './types';
import {
    PopupContainer,
    PopupOverlay,
    PopupContentWithHeader
} from '@/shared/components/Popup';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';

export const PopupMain = ({
    isOpen,
    onClose,
}: PopupMainProps) => (
    <PopupContainer isOpen={isOpen} onClose={onClose}>
        <PopupOverlay onClose={onClose} />
        <PopupContentWithHeader headerText='Main' onClose={onClose}>
            <Logo text='JustApp' icon={<LogoIcon />} uppercase />
        </PopupContentWithHeader>
    </PopupContainer>
);
