import { createSlice } from '@reduxjs/toolkit';
export const THEME_FEATURE_KEY = 'theme';

export interface ThemeState {
  navCollapsed: boolean;
  mobileNav: boolean;
  currentTheme: string;
  direction: string;
  locale: string;
}

export const initialThemeState: ThemeState = {
  navCollapsed: false,
  locale: 'en',
  mobileNav: false,
  currentTheme: 'light',
  direction: 'rtl',
};

export const themeSlice = createSlice({
  name: THEME_FEATURE_KEY,
  initialState: initialThemeState,
  reducers: {},
});

export const themeReducer = themeSlice.reducer;

export const themeActions = themeSlice.actions;
