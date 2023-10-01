import { ReactElement } from 'react';

export type AuthProps = {
    isOpen: boolean
    onClose: () => void
}

export enum AuthActions {
    signIn = 'signIn',
    signUp = 'signUp',
    resetPassword = 'resetPassword'
}

export type AuthFormProps = {
    email: string
    password: string
    username?: string
}
export interface UseModalAuthActionReturn {
    currentAction: ReactElement
}
