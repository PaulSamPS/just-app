import { Meta, StoryObj } from '@storybook/react';
import { ModalOverlay } from './ModalOverlay';

const meta: Meta<typeof ModalOverlay> = {
    title: 'shared/ModalFullWithHeader/ModalOverlay',
    component: ModalOverlay,
    argTypes: {
        onClose: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalOverlay>;

export const Primary: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Another description on the story, overriding the comments'
            }
        }
    }
};
