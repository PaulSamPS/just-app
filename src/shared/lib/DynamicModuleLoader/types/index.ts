import { Reducer } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

export interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducerList;
}
