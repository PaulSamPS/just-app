import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { signUpActions } from '../slice/signUp.slice';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SignUpApiResult, SignUpFormProps } from '../types';

export const signUp = createAsyncThunk<
    SignUpApiResult,
    SignUpFormProps,
    ThunkConfig<string>
>('auth/signUp', async ({ username, email, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<SignUpApiResult>(
            'http://localhost:5000/auth/sign-up',
            { username, email, password },
        );

        if (!response.data) {
            throw new Error();
        }

        dispatch(signUpActions.setSuccessMessage(response.data.message));
        extra.navigate!('/registration-success');

        return response.data;
    } catch (e) {
        const err: AxiosError<{ message: string }> = e as AxiosError<{ message: string }>;
        return rejectWithValue(err.response ? err.response.data.message : 'error');
    }
});
