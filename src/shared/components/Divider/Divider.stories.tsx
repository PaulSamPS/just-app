import type { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
    title: 'shared/Divider',
    component: Divider,
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
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Primary: Story = {};
