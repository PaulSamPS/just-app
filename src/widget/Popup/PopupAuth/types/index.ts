export type AuthProps = {
    isOpen: boolean
    onClose: () => void
}

export type AuthFormProps = {
    email: string
    password: string
    username?: string
}
