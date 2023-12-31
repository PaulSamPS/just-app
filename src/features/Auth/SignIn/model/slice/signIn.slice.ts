import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInSchema } from '../types';
import { signIn } from '../api/signIn';

const initialState: SignInSchema = {
    isLoading: false,
    error: undefined,
    loggedInMessage: undefined,
};

export const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<string>) => {
            state.loggedInMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(signIn.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const { actions: signInActions } = signInSlice;
export const { reducer: signInReducer } = signInSlice;
