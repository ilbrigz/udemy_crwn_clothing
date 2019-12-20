import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

// { user: { currentUser }, cart: { hidden } }

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
