import { Meta, StoryObj } from '@storybook/react';
import { PopupMain } from './PopupMain';
import { DeleteOutlineIcon56 } from '@/shared/assets';

const meta: Meta<typeof PopupMain> = {
    title: 'widget/Popup/PopupMain',
    component: PopupMain,
    argTypes: {
        headerText: {
            description: 'Header text',
            type: 'string',
            defaultValue: 'Popup?',
        },
        closeButton: {
            description: 'Close button',
            type: 'boolean',
            defaultValue: true,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        onClose: {
            table: {
                disable: true
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof PopupMain>;

export const PopupMainStory: Story = {
    args: {
        headerText: 'Popup',
        closeButton: true,
        isOpen: true,
    },
};
