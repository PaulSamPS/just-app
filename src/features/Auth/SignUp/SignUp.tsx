import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import styles from './SignUp.module.scss';
import { ModalContentWithHeader } from '@/shared/components/Modal';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { Input } from '@/shared/components/Form/Input';
import { emailOptions, passwordOptions, usernameOptions } from './model/constant';
import { Button } from '@/shared/components/Button';
import { SignUpProps, SignUpFormProps } from './model/types';
import { Subhead } from '@/shared/components/Typography/Subhead';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { signUpErrorState, signUpSuccessMessageState } from './model/selector';
import { signUp } from './model/api/signUp';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/DynamicModuleLoader';
import { signUpReducer } from './model/slice/signUp.slice';

const initialReducers: ReducerList = {
    signUp: signUpReducer,
};

export const SignUp = ({ goToSignIn }: SignUpProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<SignUpFormProps>();
    const dispatch = useAppDispatch();
    const error = useSelector(signUpErrorState);
    const successMessage = useSelector(signUpSuccessMessageState);

    const onSubmit = async (formData: SignUpFormProps) => {
        dispatch(signUp(formData));
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ModalContentWithHeader headerText='Регистрация'>
                <form className={styles['sign-up']} onSubmit={handleSubmit(onSubmit)}>
                    <Logo text='JustApp' icon={<LogoIcon />} uppercase />
                    {error && <Subhead weight='regular' className={styles.error}>{error}</Subhead>}
                    {successMessage && <Subhead weight='regular' className={styles.success}>{successMessage}</Subhead>}
                    <Input
                        {...register('email', emailOptions)}
                        type='text'
                        placeholder='Введите email'
                        error={errors.email?.message}
                    />
                    <Input
                        {...register('password', passwordOptions)}
                        type='password'
                        placeholder='Введите пароль'
                        error={errors.password?.message}
                    />
                    <Input
                        {...register('username', usernameOptions)}
                        placeholder='Введите имя пользователя'
                        type='text'
                        error={errors.username?.message}
                    />
                    <Button
                        size='m'
                        appearance='primary'
                        type='submit'
                        disabled={!isValid}
                        stretched
                    >
                        Зарегистрироваться
                    </Button>
                    <Button size='s' appearance='clear' onClick={goToSignIn}>Войти</Button>
                </form>
            </ModalContentWithHeader>
        </DynamicModuleLoader>
    );
};
