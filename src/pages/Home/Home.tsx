import clsx from 'clsx';
import { useState } from 'react';
import styles from './Home.module.scss';
import { Text } from '@/shared/components/Typography/Text';
import { Button } from '@/shared/components/Button';
import { DeleteOutlineIcon56, PlusIcon } from '@/shared/assets';
import { Title } from '@/shared/components/Typography/Title';
import { Headline } from '@/shared/components/Typography/Headline';
import { Subhead } from '@/shared/components/Typography/Subhead';
import { Caption } from '@/shared/components/Typography/Caption';
import { ModalAuth, ModalDialog, ModalMain } from '@/widget/Modal';
import { Input } from '@/shared/components/Form/Input';

interface HomeProps {
    className?: string
}

const Home = ({ className }: HomeProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isDialog, setIsDialog] = useState<boolean>(false);
    const [isPopupAuth, setIsPopupAuth] = useState<boolean>(false);

    const onLoading = () => {
        setIsLoading(!isLoading);
    };

    const onOpenModal = () => {
        setIsModal(true);
    };

    const onCloseModal = () => {
        setIsModal(false);
    };

    const onOpenDialog = () => {
        setIsDialog(true);
    };

    const onCloseDialog = () => {
        setIsDialog(false);
    };

    const onOpenPopupAuth = () => {
        setIsPopupAuth(true);
    };

    const onClosePopupAuth = () => {
        setIsPopupAuth(false);
    };

    return (
        <div className={clsx(styles.home, className)}>
            <Title weight='bold' size='h1'>Title</Title>
            <Title weight='medium' size='h2'>Title</Title>
            <Title weight='regular' size='h2'>Title</Title>
            <Headline weight='medium'>Headline</Headline>
            <Headline weight='regular'>Headline</Headline>
            <Text weight='medium'>Text</Text>
            <Text weight='regular'>Text</Text>
            <Subhead weight='bold'>Subhead</Subhead>
            <Subhead weight='medium'>Subhead</Subhead>
            <Subhead weight='regular'>Subhead</Subhead>
            <Caption weight='bold' size='xs'>Caption</Caption>
            <Caption weight='medium' size='s'>Caption</Caption>
            <Caption weight='regular' size='m'>Caption</Caption>
            <Caption weight='regular' size='l' uppercase>Caption</Caption>
            <Button size='s' appearance='primary'>Primary</Button>
            <Button size='m' appearance='primary'>Primary</Button>
            <Button size='l' appearance='primary'>Primary</Button>
            <Button size='m' appearance='secondary'>Secondary</Button>
            <Button size='l' appearance='outline'>Outline</Button>
            <Button size='l' appearance='commerce' disabled>Commerce</Button>
            <Button size='s' appearance='commerce' before={<PlusIcon />}>Commerce</Button>
            <Button size='m' appearance='commerce' before={<PlusIcon />}>Commerce</Button>
            <Button size='l' appearance='commerce' before={<PlusIcon />}>Commerce</Button>
            <Button size='s' appearance='outline' after={<PlusIcon />}>Primary</Button>
            <Button size='m' appearance='outline' after={<PlusIcon />}>Primary</Button>
            <Button size='l' appearance='outline' after={<PlusIcon />}>Primary</Button>
            <Button
                size='s'
                appearance='primary'
                before={<PlusIcon />}
                isLoading={isLoading}
                onClick={onLoading}
            >
                В корзину
            </Button>
            <Button size='l' appearance='commerce' onClick={onOpenModal}>Modal</Button>
            <ModalMain
                isOpen={isModal}
                onClose={onCloseModal}
            />
            <Button size='l' appearance='primary' onClick={onOpenDialog}>Dialog</Button>
            <ModalDialog
                isOpen={isDialog}
                onClose={onCloseDialog}
                text='Вы действительно хотите удалить ?'
                primaryButtonText='Да'
                secondaryButtonText='Нет'
                primaryButtonOnClick={onCloseDialog}
                secondaryButtonTextOnClick={onCloseDialog}
                icon={<DeleteOutlineIcon56 />}
            />
            <Input
                placeholder='Input'
            />
            <Button size='m' appearance='primary' onClick={onOpenPopupAuth}>Auth</Button>
            <ModalAuth isOpen={isPopupAuth} onClose={onClosePopupAuth} />
        </div>
    );
};

export default Home;
