import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { Headline } from './Headline';

const meta: Meta<typeof Headline> = {
    title: 'shared/Typography/Headline',
    component: Headline,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    {/* eslint-disable-next-line no-use-before-define */}
                    <Canvas of={Primary} />
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

export const Primary: Story = {
    args: {
        children: 'Headline',
        weight: 'regular',
    },
};
