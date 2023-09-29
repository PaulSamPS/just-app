import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { Title as TitleComponent } from './Title';

const meta: Meta<typeof TitleComponent> = {
    title: 'shared/Typography/Title',
    component: TitleComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    {/* eslint-disable-next-line no-use-before-define */}
                    <Canvas of={TitleStory} />
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
            description: 'Level tag h',
            type: 'string',
            defaultValue: 'h1',
            options: ['h1', 'h2'],
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
type Story = StoryObj<typeof TitleComponent>;

export const TitleStory: Story = {
    args: {
        children: 'Title',
        weight: 'bold',
        size: 'h1',
        uppercase: false
    },
};
