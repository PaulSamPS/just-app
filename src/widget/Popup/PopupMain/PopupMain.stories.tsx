import { Meta, StoryObj } from '@storybook/react';
import { PopupMain } from './PopupMain';

const meta: Meta<typeof PopupMain> = {
    title: 'widget/Popup/PopupMain',
    component: PopupMain,
    argTypes: {
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
        isOpen: true,
    },
};
