import { Meta, StoryObj } from '@storybook/react';
import { PopupLoading } from './PopupLoading';

const meta: Meta<typeof PopupLoading> = {
    title: 'widget/Popup/PopupLoading',
    component: PopupLoading,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PopupLoading>;

export const LoaderPageStory: Story = {};
