import { useFormContext } from 'react-hook-form';
import styles from './PopupResetPassword.module.scss';
import { PopupContentWithHeader } from '@/shared/components/Popup';
import { AuthFormProps, AuthResetPasswordProps } from '@/widget/Popup/PopupAuth/types';
import { Logo } from '@/shared/components/Logo';
import { LogoIcon } from '@/shared/assets';
import { Input } from '@/shared/components/Form/Input';
import { emailOptions } from '@/widget/Popup/PopupAuth/constant';
import { Button } from '@/shared/components/Button';
import { Headline } from '@/shared/components/Typography/Headline';
import { Subhead } from '@/shared/components/Typography/Subhead';

export const PopupResetPassword = ({ onClose, signIn }: AuthResetPasswordProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useFormContext<AuthFormProps>();

    const onSubmit = async (formData: AuthFormProps) => {
        console.log(formData);
    };

    return (
        <PopupContentWithHeader headerText='Сброс пароля' onClose={onClose}>
            <form className={styles['popup-reset-password']} onSubmit={handleSubmit(onSubmit)}>
                <Logo text='JustApp' icon={<LogoIcon />} uppercase />
                <Subhead weight='regular'>На почту придет письмо с инструкцией по сбросу пароля</Subhead>
                <Input
                    {...register('email', emailOptions)}
                    type='text'
                    placeholder='Введите email'
                    error={errors.email?.message}
                />
                <Button
                    size='m'
                    appearance='primary'
                    type='submit'
                    stretched
                >
                    Сбросить
                </Button>
                <div className={styles.footer}>
                    <Button size='s' appearance='clear' onClick={signIn}>Войти</Button>
                </div>
            </form>
        </PopupContentWithHeader>
    );
};
