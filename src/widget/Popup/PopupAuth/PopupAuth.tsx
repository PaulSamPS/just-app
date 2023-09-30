import { FormProvider, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { PopupSignIn } from './components/PopupSignIn/PopupSignIn';
import { AuthFormProps, AuthProps } from './types';
import { PopupSignUp } from './components/PopupSignUp/PopupSignUp';
import { PopupContainer, PopupOverlay, Portal } from '@/shared/components/Popup';
import { PopupResetPassword } from '@/widget/Popup/PopupAuth/components/PopupResetPassword/PopupResetPassword';

export const PopupAuth = ({ isOpen, onClose }: AuthProps) => {
    const methods = useForm<AuthFormProps>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const [authAction, setAuthAction] = useState<'sign-in' | 'sign-up' | 'reset-password'>('sign-in');

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

    const onResetPassword = () => {
        methods.clearErrors();
        methods.reset();
        setAuthAction('reset-password');
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
            return <PopupSignIn onClose={onClose} signUp={onSignUp} resetPassword={onResetPassword} />;

        case 'sign-up':
            return <PopupSignUp onClose={onClose} signIn={onSignIn} />;

        case 'reset-password':
            return <PopupResetPassword onClose={onClose} signIn={onSignIn} />;

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
