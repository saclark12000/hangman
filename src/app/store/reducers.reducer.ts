import { ActionReducerMap } from '@ngrx/store';
import { AppStateModel } from '../data-models';
import { gameReducer } from '../game/store/game.reducer';

export const reducers: ActionReducerMap<AppStateModel> = {
  gameState: gameReducer
};
