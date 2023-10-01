import {
    ModalContainer,
    ModalOverlay,
    ModalContentWithHeader, ModalCloseButton
} from '@/shared/components/Modal';
import { ModalMainProps } from './model/types';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';

export const ModalMain = ({
    isOpen,
    onClose,
}: ModalMainProps) => (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClose={onClose} />
        <ModalContentWithHeader headerText='Main'>
            <Logo text='JustApp' icon={<LogoIcon />} uppercase />
        </ModalContentWithHeader>
        <ModalCloseButton onClose={onClose} />
    </ModalContainer>
);
