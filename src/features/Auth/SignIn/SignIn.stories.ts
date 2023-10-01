import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './SignIn';
import { StoreDecorator } from '@/shared/config/storybook';

const meta: Meta<typeof SignIn> = {
    title: 'features/Auth/SignIn',
    component: SignIn,
    argTypes: {
        goToResetPassword: {
            table: {
                disable: true
            }
        },
        goToSignUp: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({ signIn: { isLoading: false } })];

export const Error: Story = {};
Error.decorators = [StoreDecorator({ signIn: { error: 'error' } })];
