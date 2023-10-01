import { UseFormReturn } from 'react-hook-form';
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

export interface UseModalAuthActionProps extends Omit<AuthProps, 'onClose'>{}

export interface UseModalAuthActionReturn {
    methods: UseFormReturn<AuthFormProps, any, undefined>
    currentAction: ReactElement
}
