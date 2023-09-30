import { FormProvider, useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { PopupSignIn } from '@/widget/Popup/PopupAuth/components/PopupSignIn/PopupSignIn';
import { AuthFormProps, AuthProps } from './types';
import { PopupSignUp } from '@/widget/Popup/PopupAuth/components/PopupSignUp/PopupSignUp';
import { PopupContainer, PopupOverlay, Portal } from '@/shared/components/Popup';

export const PopupAuth = ({ isOpen, onClose }: AuthProps) => {
    const methods = useForm<AuthFormProps>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const [authAction, setAuthAction] = useState<'sign-in' | 'sign-up'>('sign-in');

    const onSignUp = () => {
        methods.clearErrors();
        methods.reset();
        setAuthAction('sign-up');
    };

    const onSignIn = () => {
        methods.clearErrors();
        methods.reset();
        setAuthAction('sign-in');
    };

    useEffect(() => {
        if (!isOpen) {
            methods.clearErrors();
            methods.reset();
        }
    }, [isOpen, methods]);

    const currentAction = () => {
        switch (authAction) {
        case 'sign-in':
            return <PopupSignIn onClose={onClose} signUp={onSignUp} />;

        case 'sign-up':
            return <PopupSignUp onClose={onClose} signIn={onSignIn} />;

        default:
            return <PopupSignIn onClose={onClose} signUp={onSignUp} />;
        }
    };

    return (
        <Portal>
            <PopupContainer isOpen={isOpen} onClose={onClose}>
                <PopupOverlay onClose={onClose} />
                <FormProvider {...methods}>
                    {currentAction()}
                </FormProvider>
            </PopupContainer>
        </Portal>
    );
};
