import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { Logo } from './Logo';
import { LogoIcon } from '@/shared/assets';

const meta: Meta<typeof Logo> = {
    title: 'shared/Logo',
    component: Logo,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    {/* eslint-disable-next-line no-use-before-define */}
                    <Canvas of={LogoStory} />
                    <Controls />

                </>
            )
        }
    },
    argTypes: {
        Icon: {
            description: 'Logo Icon',
            type: 'boolean',
            defaultValue: <LogoIcon />,
            options: [<LogoIcon />, undefined],
            control: {
                type: 'radio',
            },
        },
        text: {
            description: 'Logo text',
            type: 'string',
            defaultValue: 'Logo',
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
    },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const LogoStory: Story = {
    args: {
        text: 'Logo',
        Icon: <LogoIcon />,
        uppercase: false

    },
};
