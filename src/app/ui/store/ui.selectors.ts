import * as models from '../data-models'
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getUiState = createFeatureSelector<models.UiStateModel>(
  'uiState',
);

export const getUiStateSelector = createSelector(
  getUiState,
  (uiState) => uiState.uiState
);
