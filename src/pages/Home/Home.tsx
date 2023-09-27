import clsx from 'clsx';
import { useState } from 'react';
import styles from './Home.module.scss';
import { Text } from '@/shared/ui/Typography/Text';
import { Button } from '@/shared/ui/Button';
import { PlusIcon } from '@/shared/assets';
import { Title } from '@/shared/ui/Typography/Title';
import { Headline } from '@/shared/ui/Typography/Headline';
import { Subhead } from '@/shared/ui/Typography/Subhead';
import { Caption } from '@/shared/ui/Typography/Caption';
import { PopupMain } from '@/shared/ui/Popup';

interface HomeProps {
    className?: string
}

const Home = ({ className }: HomeProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);

    const onLoading = () => {
        setIsLoading(!isLoading);
    };

    const onOpenModal = () => {
        setIsModal(!isModal);
    };

    const onCloseModal = () => {
        setIsModal(false);
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
            <Button size='s' appearance='commerce' Icon={PlusIcon} iconPosition='left'>Commerce</Button>
            <Button size='m' appearance='commerce' Icon={PlusIcon} iconPosition='left'>Commerce</Button>
            <Button size='l' appearance='commerce' Icon={PlusIcon} iconPosition='left'>Commerce</Button>
            <Button size='s' appearance='outline' Icon={PlusIcon} iconPosition='right'>Primary</Button>
            <Button size='m' appearance='outline' Icon={PlusIcon} iconPosition='right'>Primary</Button>
            <Button size='l' appearance='outline' Icon={PlusIcon} iconPosition='right'>Primary</Button>
            <Button
                size='s'
                appearance='primary'
                Icon={PlusIcon}
                iconPosition='right'
                isLoading={isLoading}
                disabled={isLoading}
                fixed
                onClick={onLoading}
            >
                В корзину
            </Button>
            <Button size='l' appearance='commerce' onClick={onOpenModal}>Modal</Button>
            <PopupMain isOpen={isModal} onClose={onCloseModal} closeButton>Lorem ipsum dolor sit amet.</PopupMain>
        </div>
    );
};

export default Home;
