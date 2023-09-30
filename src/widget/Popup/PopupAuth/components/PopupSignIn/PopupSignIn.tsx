import { useFormContext } from 'react-hook-form';
import { PopupContainer, PopupContentWithHeader, PopupOverlay, Portal } from '@/shared/components/Popup';
import { AuthFormProps, AuthProps } from '../../types';
import { Input } from '@/shared/components/Form/Input';
import styles from './PopupSignIn.module.scss';
import { Button } from '@/shared/components/Button';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';

export const PopupSignIn = ({ isOpen, onClose }: AuthProps) => {
    const { register, handleSubmit, formState: { errors } } = useFormContext<AuthFormProps>();

    const onSubmit = async (formData: AuthFormProps) => {
        console.log(formData);
    };

    console.log(errors);

    return (
        <Portal>
            <PopupContainer isOpen={isOpen} onClose={onClose}>
                <PopupOverlay onClose={onClose} />
                <PopupContentWithHeader headerText='Войти' onClose={onClose}>
                    <form className={styles['popup-sign-in']} onSubmit={handleSubmit(onSubmit)}>
                        <Logo text='JustApp' icon={<LogoIcon />} uppercase />
                        <Input
                            {...register('email', {
                                required: { value: true, message: 'Введите email' },
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: 'Некорректный email',
                                },
                            })}
                            type='text'
                            placeholder='Введите email'
                            error={errors.email?.message}
                        />
                        <Input
                            {...register('password', {
                                required: { value: true, message: 'Введите пароль' },
                                minLength: { value: 5, message: 'Пароль короче 5 символов' },
                            })}
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
                            <Button size='s' appearance='clear'>Зарегистрироваться</Button>
                            <Button size='s' appearance='clear'>Забыли пароль?</Button>
                        </div>
                    </form>
                </PopupContentWithHeader>
            </PopupContainer>
        </Portal>
    );
};
