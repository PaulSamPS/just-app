import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { AuthDecorator } from '@/shared/config/storybook/AuthContextDecorator/AuthContextDecorator';

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default {
    decorators: [StyleDecorator, withRouter, AuthDecorator],
};
