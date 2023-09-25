import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'shared/Spinner',
    component: Spinner,
    argTypes: {
        backgroundColor: {
            description: 'Spinner color',
            type: 'string',
            defaultValue: 'black',
            control: {
                type: 'color',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerStory: Story = {
    args: {
        backgroundColor: 'black'
    },
};
