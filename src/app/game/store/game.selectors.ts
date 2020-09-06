import * as models from '../data-models'
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getGameState = createFeatureSelector<models.GameStateModel>(
  'gameState',
);

export const isSelectedTargeted = createSelector(
  getGameState,
  (gameState: models.GameStateModel, props) => gameState.targetLetters.findIndex(letter => letter.letter === props.selectedLetter) > -1
)

export const getAvailableLetters = createSelector(
  getGameState,
  (gameState) => gameState.availableLetters
);

export const getTargetLetters = createSelector(
  getGameState,
  (gameState) => gameState.targetLetters
)

export const getStrikes = createSelector(
  getGameState,
  (gameState) => gameState.strikes
)

export const isStruckOut = createSelector(
  getGameState,
  (gameState)=> gameState.strikes >= gameState.maxStrikes
)

export const isWordSolved =  createSelector(
  getGameState,
  (gameState) => gameState.targetLetters.every(target=> target.selected)
)
