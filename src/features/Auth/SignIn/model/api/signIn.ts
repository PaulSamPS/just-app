import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { SignInFormProps, SignInApiResult } from '../types';
import { userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { signInActions } from '../slice/signIn.slice';

export const signIn =
    createAsyncThunk<SignInApiResult, SignInFormProps, ThunkConfig<string>>(
        'signIn',
        async ({ email, password }, thunkAPI) => {
            const { extra, dispatch, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api.post<SignInApiResult>(
                    '/auth/sign-in',
                    { email, password },
                );

                if (!response.data) {
                    throw new Error();
                }

                dispatch(userActions.setUserAuthData(response.data.user));
                dispatch(signInActions.setLoggedIn(response.data.message));
                localStorage.setItem('authToken', response.data.token);
                extra.navigate!('/');

                return response.data;
            } catch (e) {
                const err: AxiosError<{ message: string }> = e as AxiosError<{ message: string }>;
                return rejectWithValue(err.response ? err.response.data.message : 'error');
            }
        }
    );
