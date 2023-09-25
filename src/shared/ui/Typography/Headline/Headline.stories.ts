import { Meta, StoryObj } from '@storybook/react';
import { Headline } from './Headline';

const meta: Meta<typeof Headline> = {
    title: 'shared/Typography/Headline',
    component: Headline,
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
        children: {
            description: 'Text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const HeadlineStory: Story = {
    args: {
        children: 'Headline',
        weight: 'regular',
    },
};
