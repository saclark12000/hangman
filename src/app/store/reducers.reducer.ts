import { ActionReducerMap } from '@ngrx/store';
import { AppStateModel } from '../data-models';
import { uiReducer } from '../ui/store/ui.reducer';
import { gameReducer } from '../game/store/game.reducer';

export const reducers: ActionReducerMap<AppStateModel> = {
  uiState: uiReducer,
  gameState: gameReducer
};
