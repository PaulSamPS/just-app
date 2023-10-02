import { User } from '@/entities/User';

export interface SignInSchema {
    isLoading: boolean;
    error?: string;
    loggedInMessage: string | undefined;
}

export interface SignInProps {
    goToSignUp?: () => void
    goToResetPassword?: () => void
    onClose: () => void
}

export type SignInFormProps = {
    email: string
    password: string
}

export interface SignInApiResult {
    user: User;
    token: string;
    message: string;
}
