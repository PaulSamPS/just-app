import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Typography/Text',
    component: Text,
    argTypes: {
        weight: {
            description: 'Font weight',
            type: 'string',
            defaultValue: 'regular',
            options: ['regular', 'medium'],
            control: {
                type: 'radio',
            },
        },
        error: {
            description: 'Error text',
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
type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
    args: {
        children: 'Text',
        weight: 'regular',
        error: false
    },
};
