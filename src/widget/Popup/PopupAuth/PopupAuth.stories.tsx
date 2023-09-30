import { Meta, StoryObj } from '@storybook/react';
import { PopupAuth } from './PopupAuth';

const meta: Meta<typeof PopupAuth> = {
    title: 'widget/Popup/PopupAuth',
    component: PopupAuth,
    argTypes: {
        onClose: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof PopupAuth>;

export const PopupAuthStory: Story = {
    args: {
        isOpen: true
    }
};
