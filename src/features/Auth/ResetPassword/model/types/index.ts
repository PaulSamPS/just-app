export interface ResetPasswordSchema {
    isLoading: boolean;
    error?: string;
    successMessage?: string | undefined;
}

export interface ResetPasswordProps {
    goToSignIn?: () => void
}

export type ResetPasswordFormProps = {
    email: string
}

export type ResetPasswordMessageProps = {
    message: string
}
