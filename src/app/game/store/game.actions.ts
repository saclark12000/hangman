import { createAction, props } from '@ngrx/store';

export const reset = createAction('[Game Component] Reset', props<{targetLetters: string}>());
export const selectLetter = createAction('[Game Component] SelectLetter', props<{selectedLetter: string}>());
export const strike = createAction('[Game Component] Strike');
export const gameOver = createAction('[Game Component] Game Over');
