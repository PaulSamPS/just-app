import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ModalContentWithHeader } from '@/shared/components/Modal';
import { SignInFormProps, SignInProps } from './model/types';
import { Input } from '@/shared/components/Form/Input';
import styles from './SignIn.module.scss';
import { Button } from '@/shared/components/Button';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { emailOptions, passwordOptions } from './model/constant';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { signIn } from './model/api/signIn';
import { signInReducer } from './model/slice/signIn.slice';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/DynamicModuleLoader';
import { signInErrorState, signInIsLoadingState, signInLoggedInMessageState } from './model/selector';
import { Subhead } from '@/shared/components/Typography/Subhead';

const initialReducers: ReducerList = {
    signIn: signInReducer,
};

export const SignIn = ({ onClose, goToSignUp, goToResetPassword }: SignInProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<SignInFormProps>();
    const dispatch = useAppDispatch();
    const error = useSelector(signInErrorState);
    const isLoading = useSelector(signInIsLoadingState);
    const isLoggedIn = useSelector(signInLoggedInMessageState);

    const onSubmit = async (formData: SignInFormProps) => {
        await dispatch(signIn(formData));
    };

    useEffect(() => {
        if (isLoggedIn) {
            onClose();
        }
    }, [isLoggedIn, onClose]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ModalContentWithHeader headerText='Вход в аккаунт'>
                <form className={styles['sign-in']} onSubmit={handleSubmit(onSubmit)}>
                    <Logo text='JustApp' icon={<LogoIcon />} uppercase />
                    {error && <Subhead weight='regular' className={styles.error}>{error}</Subhead>}
                    <Input
                        {...register('email', emailOptions)}
                        type='text'
                        placeholder='Введите email'
                        error={errors.email?.message}
                        readOnly={isLoading}
                    />
                    <Input
                        {...register('password', passwordOptions)}
                        type='password'
                        placeholder='Введите пароль'
                        error={errors.password?.message}
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
                        Войти
                    </Button>
                    <div className={styles.footer}>
                        <Button size='s' appearance='clear' onClick={goToSignUp}>Зарегистрироваться</Button>
                        <Button size='s' appearance='clear' onClick={goToResetPassword}>Забыли пароль?</Button>
                    </div>
                </form>
            </ModalContentWithHeader>
        </DynamicModuleLoader>
    );
};
