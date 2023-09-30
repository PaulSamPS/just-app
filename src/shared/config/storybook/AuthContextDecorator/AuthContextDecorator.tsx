import { StoryFn } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { AuthFormProps } from '@/widget/Popup/PopupAuth/types';

export const AuthDecorator = (StoryComponent: StoryFn) => {
    const methods = useForm<AuthFormProps>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

    return (
        <FormProvider {...methods}>
            <StoryComponent />
        </FormProvider>
    );
};
