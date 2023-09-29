import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { Subhead } from './Subhead';

const meta: Meta<typeof Subhead> = {
    title: 'shared/Typography/Subhead',
    component: Subhead,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    {/* eslint-disable-next-line no-use-before-define */}
                    <Canvas of={SubheadStory} />
                    <Controls />

                </>
            )
        }
    },
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
