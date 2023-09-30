import { Meta, StoryObj } from '@storybook/react';
import { PopupSignUp } from './PopupSignUp';

const meta: Meta<typeof PopupSignUp> = {
    title: 'widget/Popup/PopupAuth/PopupSignUp',
    component: PopupSignUp,
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
type Story = StoryObj<typeof PopupSignUp>;

export const PopupSignUpStory: Story = {};
