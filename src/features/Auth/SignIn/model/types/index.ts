import { User } from '@/entities/User';

export interface SignInSchema {
    isLoading: boolean;
    error?: string;
    message: string | undefined;
}

export interface SignInProps {
    goToSignUp?: () => void
    goToResetPassword?: () => void
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
