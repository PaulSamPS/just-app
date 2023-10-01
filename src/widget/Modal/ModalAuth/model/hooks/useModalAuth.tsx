import { useState } from 'react';
import {
    AuthActions,
    UseModalAuthActionReturn
} from '@/widget/Modal/ModalAuth/model/types';
import { SignIn } from '@/features/Auth/SignIn';
import { SignUp } from '@/features/Auth/SignUp';
import { ResetPassword } from '@/features/Auth/ResetPassword';

export const useModalAuthAction = (): UseModalAuthActionReturn => {
    const [authAction, setAuthAction] = useState<AuthActions>(AuthActions.signIn);

    const goToSignUp = () => {
        setAuthAction(AuthActions.signUp);
    };

    const goToSignIn = () => {
        setAuthAction(AuthActions.signIn);
    };

    const goToResetPassword = () => {
        setAuthAction(AuthActions.resetPassword);
    };

    const currentActionMapper = {
        signIn: <SignIn goToSignUp={goToSignUp} goToResetPassword={goToResetPassword} />,
        signUp: <SignUp goToSignIn={goToSignIn} />,
        resetPassword: <ResetPassword goToSignIn={goToSignIn} />
    };

    const currentAction = currentActionMapper[authAction];

    return { currentAction };
};
