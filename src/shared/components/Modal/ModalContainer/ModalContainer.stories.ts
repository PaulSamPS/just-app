import { Meta, StoryObj } from '@storybook/react';
import { ModalContainer } from './ModalContainer';

const meta: Meta<typeof ModalContainer> = {
    title: 'shared/Modal/ModalContainer',
    component: ModalContainer,
    argTypes: {
        isOpen: {
            description: 'isOpen',
            type: 'boolean',
            defaultValue: true,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        onClose: {
            table: {
                disable: true
            }
        },
        children: {
            description: 'content',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalContainer>;

export const Primary: Story = {
    args: {
        children: 'Content',
        isOpen: true
    }
};
