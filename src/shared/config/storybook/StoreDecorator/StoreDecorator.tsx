import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducerList } from '@/shared/lib/DynamicModuleLoader';
import { signInReducer } from '@/features/Auth/SignIn';
import { signUpReducer } from '@/features/Auth/SignUp';
import { resetPasswordReducer } from '@/features/Auth/ResetPassword';
import { userReducer } from '@/entities/User';

const defaultAsyncReducers: ReducerList = {
    signIn: signInReducer,
    signUp: signUpReducer,
    resetPassword: resetPasswordReducer,
    user: userReducer
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
        (StoryComponent: StoryFn) =>
            (
                <StoreProvider initialSate={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                    <StoryComponent />
                </StoreProvider>
            );
