import { Meta, StoryObj } from '@storybook/react';
import { PopupDialog } from './PopupDialog';
import { DeleteOutlineIcon56 } from '@/shared/assets';

const meta: Meta<typeof PopupDialog> = {
    title: 'widget/Popup/PopupDialog',
    component: PopupDialog,
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
type Story = StoryObj<typeof PopupDialog>;

export const PopupDialogStory: Story = {
    args: {
        text: 'A u sure?',
        primaryButtonText: 'Yes',
        secondaryButtonText: 'No',
        isOpen: true,
        icon: <DeleteOutlineIcon56 />
    },
};
