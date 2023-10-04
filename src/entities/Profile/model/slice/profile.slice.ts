import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, ProfileSchema } from '../types';
import { updateProfileAvatar } from '@/features/Profile/UploadAvatar';

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        setCancelEdit: (state) => {
            state.readonly = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileAvatar.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileAvatar.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.data = action.payload;
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(updateProfileAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
