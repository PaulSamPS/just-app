import { Meta, StoryObj } from '@storybook/react';
import { FC, SVGProps } from 'react';
import { Button } from './Button';
import { PlusIcon } from '@/shared/assets';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        size: {
            description: 'Button size',
            type: 'string',
            defaultValue: 'm',
            options: ['s', 'm', 'l'],
            control: {
                type: 'radio',
            },
        },
        appearance: {
            description: 'Button appearance',
            type: 'string',
            defaultValue: 'primary',
            options: [
                'primary',
                'secondary',
                'outline',
                'commerce',
                'overlay-primary',
                'overlay-secondary',
                'overlay-outline'
            ],
            control: {
                type: 'radio',
            },
        },
        Icon: {
            description: 'Svg icon',
            type: 'function',
            defaultValue: PlusIcon,
            options: PlusIcon,
            control: {
                type: 'radio',
            },
        },
        iconPosition: {
            description: 'Position Icon',
            type: 'string',
            defaultValue: undefined,
            options: ['left', 'right'],
            control: {
                type: 'radio',
            },
        },
        fixed: {
            description: '100% width',
            type: 'boolean',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        isLoading: {
            description: 'Is loading',
            type: 'boolean',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        children: {
            description: 'Text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
    args: {
        children: 'Button',
        appearance: 'primary',
        size: 'm'
    },
};

export const ButtonWithIconStory: Story = {
    args: {
        children: 'Button',
        appearance: 'primary',
        size: 'm',
        Icon: PlusIcon,
        iconPosition: 'left'
    },
};
