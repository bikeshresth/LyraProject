import authReducer, { AUTH_FEATURE_KEY } from './auth/auth.reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { themeReducer, THEME_FEATURE_KEY } from './theme/theme.reducer';

const store = configureStore({
  reducer: {
    [AUTH_FEATURE_KEY]: authReducer,
    [THEME_FEATURE_KEY]: themeReducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
