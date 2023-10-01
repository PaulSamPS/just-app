import { Meta, StoryObj } from '@storybook/react';
import { ModalOverlay } from './ModalOverlay';

const meta: Meta<typeof ModalOverlay> = {
    title: 'shared/Modal/ModalOverlay',
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

export const ModalOverlayStory: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Another description on the story, overriding the comments'
            }
        }
    }
};