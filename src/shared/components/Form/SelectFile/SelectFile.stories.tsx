import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import { SelectFile } from './SelectFile';

const meta: Meta<typeof SelectFile> = {
    title: 'shared/Form/SelectFile',
    component: SelectFile,
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
        fileSelected: {
            description: 'URL.createObjectURL',
            type: 'string',
            defaultValue: undefined,
            options: ['selected', undefined],
            control: {
                type: 'radio',
            },
        },
        selectFile: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof SelectFile>;

export const Primary: Story = {
    args: {
        id: 'file',
        chooseText: 'Выберите файл',
        chooseTextDone: 'Файл выбран'
    },
};
