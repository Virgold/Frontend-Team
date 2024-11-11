import { ThemeProviderState } from '@/components/theme/theme-provider';
import { initialState } from '@/constants';
import {createContext} from 'react';

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
