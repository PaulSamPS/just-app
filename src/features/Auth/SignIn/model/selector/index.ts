import { StateSchema } from '@/app/providers/StoreProvider';

export const signInErrorState = (state: StateSchema) => state.signIn?.error;
