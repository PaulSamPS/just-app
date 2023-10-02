import { StateSchema } from '@/app/providers/StoreProvider';

export const signInErrorState = (state: StateSchema) => state.signIn?.error;
export const signInLoggedInMessageState = (state: StateSchema) => state.signIn?.loggedInMessage;
export const signInIsLoadingState = (state: StateSchema) => state.signIn?.isLoading;
