import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

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

export const Primary: Story = {};
