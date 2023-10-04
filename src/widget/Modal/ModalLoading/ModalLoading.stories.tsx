import { Meta, StoryObj } from '@storybook/react';
import { ModalLoading } from './ModalLoading';

const meta: Meta<typeof ModalLoading> = {
    title: 'widget/ModalFullWithHeader/ModalLoading',
    component: ModalLoading,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ModalLoading>;

export const Primary: Story = {};
