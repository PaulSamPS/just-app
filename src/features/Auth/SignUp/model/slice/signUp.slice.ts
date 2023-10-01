import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignUpSchema } from '../types';
import { signUp } from '../api/signUp';

const initialState: SignUpSchema = {
    isLoading: false,
    error: undefined,
    successMessage: undefined,
};

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        setSuccessMessage: (state, action: PayloadAction<string>) => {
            state.successMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(signUp.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: signUpActions } = signUpSlice;
export const { reducer: signUpReducer } = signUpSlice;
