import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { UserSchema, User, TokenAuthData } from '../types';

const initialState: UserSchema = {
    authData: undefined
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            if (localStorage.getItem('authToken')) {
                const user: TokenAuthData =
                    jwtDecode(localStorage.getItem('authToken')!);

                if (user) {
                    state.authData = user.user;
                }
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem('authToken');
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
