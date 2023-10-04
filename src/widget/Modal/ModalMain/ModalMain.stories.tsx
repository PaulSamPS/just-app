import { Meta, StoryObj } from '@storybook/react';
import { ModalMain } from './ModalMain';

const meta: Meta<typeof ModalMain> = {
    title: 'widget/ModalFullWithHeader/ModalMain',
    component: ModalMain,
    argTypes: {
        onClose: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalMain>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
};
