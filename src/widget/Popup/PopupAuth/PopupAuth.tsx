import { FormProvider, useForm } from 'react-hook-form';
import { PopupSignIn } from '@/widget/Popup/PopupAuth/components/PopupSignIn/PopupSignIn';
import { AuthFormProps, AuthProps } from './types';

export const PopupAuth = ({ isOpen, onClose }: AuthProps) => {
    const methods = useForm<AuthFormProps>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    return (
        <FormProvider {...methods}>
            <PopupSignIn isOpen={isOpen} onClose={onClose} />
        </FormProvider>
    );
};
