import { ReactElement } from 'react';

export type AuthProps = {
    isOpen: boolean
    onClose: () => void
}

export type AuthActions = 'signIn' | 'signUp' | 'resetPassword'

export interface UseModalAuthActionProps extends Omit<AuthProps, 'isOpen'>{}
export interface UseModalAuthActionReturn {
    currentAction: ReactElement
}
