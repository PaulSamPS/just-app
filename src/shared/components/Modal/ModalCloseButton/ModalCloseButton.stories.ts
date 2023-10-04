import { Meta, StoryObj } from '@storybook/react';
import { ModalCloseButton } from './ModalCloseButton';

const meta: Meta<typeof ModalCloseButton> = {
    title: 'shared/ModalFullWithHeader/ModalCloseButton',
    component: ModalCloseButton,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ModalCloseButton>;

export const Primary: Story = {};
