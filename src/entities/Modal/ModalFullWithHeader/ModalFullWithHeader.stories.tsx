import { Meta, StoryObj } from '@storybook/react';
import { ModalFullWithHeader } from './ModalFullWithHeader';

const meta: Meta<typeof ModalFullWithHeader> = {
    title: 'entities/Modal/ModalFullWithHeader',
    component: ModalFullWithHeader,
    argTypes: {
        onClose: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalFullWithHeader>;

export const Primary: Story = {
    args: {
        headerText: 'Some text',
        children: 'Some children',
        isOpen: true
    }
};
