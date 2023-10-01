import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ResetPasswordFormProps, ResetPasswordMessageProps } from '../types';
import { resetPasswordActions } from '@/features/Auth/ResetPassword/model/slice/resetPassword.slice';

export const resetPassword =
    createAsyncThunk<ResetPasswordMessageProps, ResetPasswordFormProps, ThunkConfig<string>>(
        'auth/resetPassword',
        async ({ email }, thunkAPI) => {
            const { extra, dispatch, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api.post<ResetPasswordMessageProps>(
                    '/user/reset-password',
                    { email },
                );

                if (!response.data) {
                    throw new Error();
                }

                dispatch(resetPasswordActions.setResetPasswordMessage(response.data.message));

                return response.data;
            } catch (e) {
                const err: AxiosError<{ message: string }> = e as AxiosError<{ message: string }>;
                return rejectWithValue(err.response ? err.response.data.message : 'error');
            }
        }
    );
