import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { Caption } from './Caption';

const meta: Meta<typeof Caption> = {
    title: 'shared/Typography/Caption',
    component: Caption,
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
            options: ['regular', 'medium', 'bold'],
            control: {
                type: 'radio',
            },
        },
        size: {
            description: 'Font size',
            type: 'string',
            defaultValue: 'm',
            options: ['xs', 's', 'm', 'l'],
            control: {
                type: 'radio',
            },
        },
        uppercase: {
            description: 'Uppercase',
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
type Story = StoryObj<typeof Caption>;

export const Primary: Story = {
    args: {
        children: 'Caption',
        weight: 'regular',
        size: 'm',
        uppercase: false
    },
};
