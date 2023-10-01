import { StateSchema } from '@/app/providers/StoreProvider';

export const authDataSelector = (state: StateSchema) => state.user.authData;
