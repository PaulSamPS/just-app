export type AuthProps = {
    isOpen: boolean
    onClose: () => void
}

export interface AuthSignInProps extends Omit<AuthProps, 'isOpen'> {
    signUp?: () => void
    resetPassword?: () => void
}

export interface AuthSignUpProps extends Omit<AuthProps, 'isOpen'> {
    signIn?: () => void
}

export interface AuthResetPasswordProps extends Omit<AuthProps, 'isOpen'>, AuthSignUpProps {}

export type AuthFormProps = {
    email: string
    password: string
    username?: string
}
