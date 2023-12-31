import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Form/Input',
    component: Input,
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
        error: {
            description: 'error',
            type: 'string',
            defaultValue: undefined,
            options: ['error', undefined],
            control: {
                type: 'radio',
            },
        },
        name: {
            description: 'label',
            type: 'string',
            defaultValue: undefined,
            options: ['label', undefined],
            control: {
                type: 'radio',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        name: undefined,
        placeholder: 'input'
    },
};
