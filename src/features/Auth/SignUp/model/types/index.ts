export interface SignUpSchema {
    isLoading: boolean;
    error?: string;
    successMessage?: string
}

export interface SignUpProps {
    goToSignIn?: () => void
}

export type SignUpFormProps = {
    email: string
    password: string
    username: string
}

export interface SignUpApiResult {
    message: string;
}
