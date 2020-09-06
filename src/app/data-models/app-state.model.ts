import * as uiModels from '../ui/data-models/index';
import * as gameModels from '../game/data-models/index';
// import * as userModels from '../user/store/data-models';

export class AppStateModel {
  uiState: uiModels.UiStateModel = new uiModels.UiStateModel();
  gameState: gameModels.GameStateModel = new gameModels.GameStateModel("");
};
