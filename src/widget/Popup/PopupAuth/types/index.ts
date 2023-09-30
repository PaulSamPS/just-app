export type AuthProps = {
    isOpen: boolean
    onClose: () => void
}

export interface AuthSignInProps extends Omit<AuthProps, 'isOpen'> {
    signUp?: () => void
}

export interface AuthSignUpProps extends Omit<AuthProps, 'isOpen'> {
    signIn?: () => void
}

export type AuthFormProps = {
    email: string
    password: string
    username?: string
}
