import { Meta, StoryObj } from '@storybook/react';
import { Subhead } from './Subhead';

const meta: Meta<typeof Subhead> = {
    title: 'shared/Typography/Subhead',
    component: Subhead,
    argTypes: {
        weight: {
            description: 'Font weight',
            type: 'string',
            defaultValue: 'regular',
            options: ['regular', 'medium', 'bold'],
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
type Story = StoryObj<typeof Subhead>;

export const SubheadStory: Story = {
    args: {
        children: 'Subhead',
        weight: 'regular',
    },
};
