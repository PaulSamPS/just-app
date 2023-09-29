import { Meta, StoryObj } from '@storybook/react';
import { PopupOverlay } from './PopupOverlay';

const meta: Meta<typeof PopupOverlay> = {
    title: 'shared/Popup/PopupOverlay',
    component: PopupOverlay,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof PopupOverlay>;

export const PopupOverlayStory: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Another description on the story, overriding the comments'
            }
        }
    }
};
