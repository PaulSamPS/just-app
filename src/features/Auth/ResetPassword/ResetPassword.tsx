import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { emailOptions } from './model/constant';
import styles from './ResetPassword.module.scss';
import { ModalContentWithHeader } from '@/shared/components/Modal';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { Input } from '@/shared/components/Form/Input';
import { Button } from '@/shared/components/Button';
import { Subhead } from '@/shared/components/Typography/Subhead';
import { ResetPasswordFormProps, ResetPasswordProps } from './model/types';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { resetPassword } from './model/api/resetPassword';
import { resetPasswordReducer } from './model/slice/resetPassword.slice';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/DynamicModuleLoader';
import {
    resetPasswordErrorState,
    resetPasswordIsLoadingState,
    resetPasswordSuccessMessageState
} from './model/selector';

const initialReducers: ReducerList = {
    resetPassword: resetPasswordReducer,
};

const ResetPassword = ({ goToSignIn }: ResetPasswordProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<ResetPasswordFormProps>();
    const dispatch = useAppDispatch();
    const error = useSelector(resetPasswordErrorState);
    const successMessage = useSelector(resetPasswordSuccessMessageState);
    const isLoading = useSelector(resetPasswordIsLoadingState);

    const onSubmit = async (formData: ResetPasswordFormProps) => {
        dispatch(resetPassword(formData));
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ModalContentWithHeader headerText='Сброс пароля'>
                <form className={styles['reset-password']} onSubmit={handleSubmit(onSubmit)}>
                    <Logo text='JustApp' icon={<LogoIcon />} uppercase />
                    <Subhead weight='regular'>На почту придет письмо с инструкцией по сбросу пароля</Subhead>
                    {error && <Subhead weight='regular' className={styles.error}>{error}</Subhead>}
                    {successMessage && <Subhead weight='regular' className={styles.success}>{successMessage}</Subhead>}
                    <Input
                        {...register('email', emailOptions)}
                        type='text'
                        placeholder='Введите email'
                        error={errors.email?.message}
                        readOnly={isLoading}
                    />
                    <Button
                        size='m'
                        appearance='primary'
                        type='submit'
                        disabled={!isValid || isLoading}
                        isLoading={isLoading}
                        stretched
                    >
                        Сбросить
                    </Button>
                    <div className={styles.footer}>
                        <Button size='s' appearance='clear' onClick={goToSignIn}>Войти</Button>
                    </div>
                </form>
            </ModalContentWithHeader>
        </DynamicModuleLoader>
    );
};

export default ResetPassword;
