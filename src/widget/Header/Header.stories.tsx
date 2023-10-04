import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { StoreDecorator } from '@/shared/config/storybook';

const meta: Meta<typeof Header> = {
    title: 'widget/Header',
    component: Header,
    argTypes: {
        className: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const WithOutLogin: Story = {};
WithOutLogin.decorators = [StoreDecorator({ user: { authData: undefined } })];

export const WithLogin: Story = {};
WithLogin.decorators = [StoreDecorator({ user: { authData: { username: 'user' } } })];
