import authReducer, { initialAuthState, authActions } from '../auth.reducer';
import store from '../../store';
describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: null })).toEqual(initialAuthState);
  });

  it('login user', () => {
    let state = store.getState().auth;
    // action
    store.dispatch(authActions.authenticated());

    state = store.getState().auth;
    expect(state).toEqual(
      expect.objectContaining({
        isAuthenticated: true,
        loading: false,
        error: null,
      })
    );
  });
});
