import { Meta, StoryObj } from '@storybook/react';
import { PopupCloseButton } from './PopupCloseButton';

const meta: Meta<typeof PopupCloseButton> = {
    title: 'shared/Popup/PopupCloseButton',
    component: PopupCloseButton,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof PopupCloseButton>;

export const PopupCloseButtonStory: Story = {};
