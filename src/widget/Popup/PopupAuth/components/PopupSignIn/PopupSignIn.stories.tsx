import { Meta, StoryObj } from '@storybook/react';
import { PopupSignIn } from './PopupSignIn';

const meta: Meta<typeof PopupSignIn> = {
    title: 'widget/Popup/PopupAuth/PopupSignIn',
    component: PopupSignIn,
    argTypes: {
        onClose: {
            table: {
                disable: true
            }
        },
        resetPassword: {
            table: {
                disable: true
            }
        },
        signUp: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof PopupSignIn>;

export const PopupSignInStory: Story = {};
