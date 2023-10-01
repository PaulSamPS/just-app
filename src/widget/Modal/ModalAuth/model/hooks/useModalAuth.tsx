import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
    AuthActions,
    AuthFormProps,
    UseModalAuthActionProps,
    UseModalAuthActionReturn
} from '@/widget/Modal/ModalAuth/model/types';
import { SignIn } from '@/features/Auth/SignIn';
import { SignUp } from '@/features/Auth/SignUp';
import { ResetPassword } from '@/features/Auth/ResetPassword';

export const usePopupAuthAction = ({ isOpen }: UseModalAuthActionProps): UseModalAuthActionReturn => {
    const methods = useForm<AuthFormProps>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });
    const [authAction, setAuthAction] = useState<AuthActions>(AuthActions.signIn);

    const goToSignUp = () => {
        methods.clearErrors();
        methods.reset();
        setAuthAction(AuthActions.signUp);
    };

    const goToSignIn = () => {
        methods.clearErrors();
        methods.reset();
        setAuthAction(AuthActions.signIn);
    };

    const goToResetPassword = () => {
        methods.clearErrors();
        methods.reset();
        setAuthAction(AuthActions.resetPassword);
    };

    useEffect(() => {
        if (!isOpen) {
            methods.clearErrors();
            methods.reset();
        }
    }, [isOpen, methods]);

    const currentActionMapper = {
        signIn: <SignIn goToSignUp={goToSignUp} goToResetPassword={goToResetPassword} />,
        signUp: <SignUp goToSignIn={goToSignIn} />,
        resetPassword: <ResetPassword goToSignIn={goToSignIn} />
    };

    const currentAction = currentActionMapper[authAction];

    return { methods, currentAction };
};
