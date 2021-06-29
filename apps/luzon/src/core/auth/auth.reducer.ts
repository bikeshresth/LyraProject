import { createSlice } from '@reduxjs/toolkit';
export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  user: null;
  error: null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    error: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
    authenticated: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;

// TODO: Handy Later

// export const authAdapter = createEntityAdapter<AuthState>();
// const { selectAll, selectEntities } = authAdapter.getSelectors();
// export const getAuthState = (state: AuthState) => state[AUTH_FEATURE_KEY];
// export const selectAllAuth = createSelector(getAuthState, selectAll);
// export const selectAuthEntities = createSelector(getAuthState, selectEntities);
