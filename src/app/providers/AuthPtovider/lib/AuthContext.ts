import { createContext } from 'react';
import { IAppAuthModalContext } from '../types';

export const AppAuthContext = createContext<IAppAuthModalContext>({});
