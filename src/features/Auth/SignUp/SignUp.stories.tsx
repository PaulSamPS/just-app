import { Meta, StoryObj } from '@storybook/react';
import SignUp from './SignUp';
import { StoreDecorator } from '@/shared/config/storybook';

const meta: Meta<typeof SignUp> = {
    title: 'features/Auth/SignUp',
    component: SignUp,
    argTypes: {
        goToSignIn: {
            table: {
                disable: true
            }
        },
    }
};

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({ signUp: { isLoading: false } })];

export const Error: Story = {};
Error.decorators = [StoreDecorator({ signUp: { error: 'error' } })];

export const Success: Story = {};
Success.decorators = [StoreDecorator({ signUp: { successMessage: 'success' } })];
