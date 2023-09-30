import { useFormContext } from 'react-hook-form';
import styles from './PopupSignUp.module.scss';
import { AuthFormProps, AuthSignUpProps } from '../../types';
import { PopupContentWithHeader } from '@/shared/components/Popup';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { Input } from '@/shared/components/Form/Input';
import { emailOptions, passwordOptions, usernameOptions } from '../../constant';
import { Button } from '@/shared/components/Button';

export const PopupSignUp = ({ onClose, signIn }: AuthSignUpProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useFormContext<AuthFormProps>();

    const onSubmit = async (formData: AuthFormProps) => {
        console.log(formData);
    };

    return (
        <PopupContentWithHeader headerText='Регистрация' onClose={onClose}>
            <form className={styles['popup-sign-up']} onSubmit={handleSubmit(onSubmit)}>
                <Logo text='JustApp' icon={<LogoIcon />} uppercase />
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
                    stretched
                >
                    Зарегистрироваться
                </Button>
                <Button size='s' appearance='clear' onClick={signIn}>Войти</Button>
            </form>
        </PopupContentWithHeader>
    );
};
