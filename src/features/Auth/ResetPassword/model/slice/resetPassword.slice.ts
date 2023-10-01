import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { resetPassword } from '../api/resetPassword';
import { ResetPasswordSchema } from '../types';

const initialState: ResetPasswordSchema = {
    isLoading: false,
    error: undefined,
    successMessage: undefined
};

export const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
        setResetPasswordMessage: (state, action: PayloadAction<string>) => {
            state.successMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(resetPassword.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state,) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: resetPasswordActions } = resetPasswordSlice;
export const { reducer: resetPasswordReducer } = resetPasswordSlice;
