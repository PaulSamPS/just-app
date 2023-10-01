import { Meta, StoryObj } from '@storybook/react';
import { ModalAuth } from './ModalAuth';
import { StoreDecorator } from '@/shared/config/storybook';

const meta: Meta<typeof ModalAuth> = {
    title: 'widget/Modal/ModalAuth',
    component: ModalAuth,
    argTypes: {
        onClose: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalAuth>;

export const ModalAuthStory: Story = {
    args: {
        isOpen: true
    }
};
ModalAuthStory.decorators = [StoreDecorator({})];
