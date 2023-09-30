import { useFormContext } from 'react-hook-form';
import { PopupContentWithHeader } from '@/shared/components/Popup';
import { AuthFormProps, AuthSignInProps } from '../../types';
import { Input } from '@/shared/components/Form/Input';
import styles from './PopupSignIn.module.scss';
import { Button } from '@/shared/components/Button';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { emailOptions, passwordOptions } from '../../constant';

export const PopupSignIn = ({ onClose, signUp }: AuthSignInProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useFormContext<AuthFormProps>();

    const onSubmit = async (formData: AuthFormProps) => {
        console.log(formData);
    };

    return (
        <PopupContentWithHeader headerText='Вход в аккаунт' onClose={onClose}>
            <form className={styles['popup-sign-in']} onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                    size='m'
                    appearance='primary'
                    type='submit'
                    stretched
                >
                    Войти
                </Button>
                <div className={styles.footer}>
                    <Button size='s' appearance='clear' onClick={signUp}>Зарегистрироваться</Button>
                    <Button size='s' appearance='clear'>Забыли пароль?</Button>
                </div>
            </form>
        </PopupContentWithHeader>
    );
};
