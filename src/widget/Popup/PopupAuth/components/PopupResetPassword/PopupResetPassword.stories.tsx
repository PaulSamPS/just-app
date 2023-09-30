import { Meta, StoryObj } from '@storybook/react';
import { PopupResetPassword } from './PopupResetPassword';

const meta: Meta<typeof PopupResetPassword> = {
    title: 'widget/Popup/PopupAuth/PopupResetPassword',
    component: PopupResetPassword,
    argTypes: {
        onClose: {
            table: {
                disable: true
            }
        },
        signIn: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof PopupResetPassword>;

export const PopupResetPasswordStory: Story = {};
