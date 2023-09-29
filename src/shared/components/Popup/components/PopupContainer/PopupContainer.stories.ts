import { Meta, StoryObj } from '@storybook/react';
import { PopupContainer } from './PopupContainer';

const meta: Meta<typeof PopupContainer> = {
    title: 'shared/Popup/PopupContainer',
    component: PopupContainer,
    argTypes: {
        isOpen: {
            description: 'isOpen',
            type: 'boolean',
            defaultValue: true,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        children: {
            description: 'content',
        },
    },
};

export default meta;
type Story = StoryObj<typeof PopupContainer>;

export const PopupContainerStory: Story = {
    args: {
        children: 'Content',
        isOpen: true
    }
};
