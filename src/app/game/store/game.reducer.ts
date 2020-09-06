import { createReducer, on } from '@ngrx/store';
import * as actions from './game.actions';
import * as models from '../data-models';

const initialState = new models.GameStateModel("");

const _gameReducer = createReducer(initialState,
  on(actions.reset, (_, targetLetters) => new models.GameStateModel(targetLetters.targetLetters.toLocaleUpperCase())),
  on(actions.selectLetter, (gameState:models.GameStateModel, selectedLetter) => {
    const availableLetterIndex = gameState.availableLetters.findIndex(availableLetter => availableLetter.letter === selectedLetter.selectedLetter);

    if(availableLetterIndex > -1) {
      // sets selected flag for availableLetters
      let availableLetters = gameState.availableLetters.reduce((acc, letter)=> {
        let currLetter = {...letter};
        currLetter.selected = currLetter.selected ? currLetter.selected : selectedLetter.selectedLetter === currLetter.letter;
        return [...acc, currLetter]}, []);
      // sets target letters selected flag to true if they are the selected letter
      let targetLetters = gameState.targetLetters.reduce((acc, letter)=> {
        let currLetter = {...letter};
        currLetter.selected = currLetter.selected ? currLetter.selected : selectedLetter.selectedLetter === currLetter.letter;
        return [...acc, currLetter]}, []);

      return {...gameState,
        availableLetters: availableLetters,
        targetLetters: targetLetters }
    }
  }),
  on(actions.strike, (gameState:models.GameStateModel) => ({...gameState, strikes: gameState.strikes+1})),
  on(actions.gameOver, (gameState:models.GameStateModel) => {
    // sets selected flag for availableLetters
    let availableLetters = gameState.availableLetters.reduce((acc, letter)=> {
      let currLetter = {...letter};
      currLetter.selected = true;
      return [...acc, currLetter]}, []);
    // sets target letters selected flag to true if they are the selected letter
    let targetLetters = gameState.targetLetters.reduce((acc, letter)=> {
      let currLetter = {...letter};
      currLetter.selected = true;
      return [...acc, currLetter]}, []);

    return {...gameState,
      availableLetters: availableLetters,
      targetLetters: targetLetters
    }

  })
);

export function gameReducer(state, action) {
  return _gameReducer(state, action);
}
