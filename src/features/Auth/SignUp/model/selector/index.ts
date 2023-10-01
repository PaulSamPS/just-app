import { StateSchema } from '@/app/providers/StoreProvider';

export const signUpErrorState = (state: StateSchema) => state.signUp?.error;
export const signUpSuccessMessageState = (state: StateSchema) => state.signUp?.successMessage;
