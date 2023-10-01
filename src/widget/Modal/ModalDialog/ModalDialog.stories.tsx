import { Meta, StoryObj } from '@storybook/react';
import { ModalDialog } from './ModalDialog';
import { DeleteOutlineIcon56 } from '@/shared/assets';

const meta: Meta<typeof ModalDialog> = {
    title: 'widget/Modal/ModalDialog',
    component: ModalDialog,
    argTypes: {
        text: {
            description: 'Headline text',
            type: 'string',
            defaultValue: 'A u sure?',
        },
        primaryButtonText: {
            description: 'primary button text',
            type: 'string',
            defaultValue: 'Yes',
        },
        secondaryButtonText: {
            description: 'primary button text',
            type: 'string',
            defaultValue: 'No',
        },
        icon: {
            table: {
                disable: true
            }
        },
        onClose: {
            table: {
                disable: true
            }
        },
        primaryButtonOnClick: {
            table: {
                disable: true
            }
        },
        secondaryButtonTextOnClick: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalDialog>;

export const ModalDialogStory: Story = {
    args: {
        text: 'A u sure?',
        primaryButtonText: 'Yes',
        secondaryButtonText: 'No',
        isOpen: true,
        icon: <DeleteOutlineIcon56 />
    },
};
