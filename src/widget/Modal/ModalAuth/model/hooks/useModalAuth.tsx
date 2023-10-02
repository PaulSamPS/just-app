import { ReactElement, useEffect, useState } from 'react';
import {
    AuthActions, UseModalAuthActionProps,
    UseModalAuthActionReturn
} from '@/widget/Modal/ModalAuth/model/types';
import { SignIn } from '@/features/Auth/SignIn';
import { SignUp } from '@/features/Auth/SignUp';
import { ResetPassword } from '@/features/Auth/ResetPassword';

export const useModalAuthAction = ({ isOpen, onClose }: UseModalAuthActionProps): UseModalAuthActionReturn => {
    const [authAction, setAuthAction] = useState<AuthActions>('signIn');

    const goToSignUp = () => {
        setAuthAction('signUp');
    };

    const goToSignIn = () => {
        setAuthAction('signIn');
    };

    const goToResetPassword = () => {
        setAuthAction('resetPassword');
    };

    useEffect(() => {
        if (!isOpen) {
            setAuthAction('signIn');
        }
    }, [isOpen]);

    const currentActionMapper: Record<AuthActions, ReactElement> = {
        signIn: <SignIn onClose={onClose} goToSignUp={goToSignUp} goToResetPassword={goToResetPassword} />,
        signUp: <SignUp goToSignIn={goToSignIn} />,
        resetPassword: <ResetPassword goToSignIn={goToSignIn} />
    };

    const currentAction = currentActionMapper[authAction];

    return { currentAction };
};
