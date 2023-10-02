import { StateSchema } from '@/app/providers/StoreProvider';

export const resetPasswordErrorState = (state: StateSchema) => state.resetPassword?.error;
export const resetPasswordSuccessMessageState = (state: StateSchema) => state.resetPassword?.successMessage;
export const resetPasswordIsLoadingState = (state: StateSchema) => state.resetPassword?.isLoading;
