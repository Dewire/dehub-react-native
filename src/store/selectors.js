
import { createSelector } from 'reselect';

export const spinCountSelector = state => state.app.spinCount;

export const isSpinActiveSelector = createSelector(
  spinCountSelector,
  spinCount => spinCount > 0,
);
