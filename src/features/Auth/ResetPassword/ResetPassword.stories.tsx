import { Meta, StoryObj } from '@storybook/react';
import { ResetPassword } from './ResetPassword';
import { StoreDecorator } from '@/shared/config/storybook';

const meta: Meta<typeof ResetPassword> = {
    title: 'features/Auth/ResetPassword',
    component: ResetPassword,
    argTypes: {
        goToSignIn: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof ResetPassword>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({ resetPassword: { isLoading: false } })];

export const Error: Story = {};
Error.decorators = [StoreDecorator({ resetPassword: { error: 'error' } })];

export const Success: Story = {};
Success.decorators = [StoreDecorator({ resetPassword: { successMessage: 'success' } })];
