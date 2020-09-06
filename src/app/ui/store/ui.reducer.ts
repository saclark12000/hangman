import { createReducer, on } from '@ngrx/store';
import * as actions from './ui.actions';
import * as models from '../data-models';

const initialState = new models.UiStateModel();

const _uiReducer = createReducer(initialState,
  // on(flightActions.reset, _ => new models.UiStateModel()),
  // on(flightActions.saveSearchOptions, state => ({...state, bookProcess: models.BookFlightType.Departure })),
  // on(actions.processNavigateBack, state => ({...state, bookProcess: state.bookProcess-1})),
  // on(actions.processNavigateContinue, state => ({...state, bookProcess: state.bookProcess+1})),
  // on(actions.addFlight, (state, flight) => ({ ...state, flights: [ ...state.flights, flight] })),
  // on(actions.saveSearchOptions, (state, searchOptions) => ({ ...state, searchOptions: searchOptions })),
);

export function uiReducer(state, action) {
  return _uiReducer(state, action);
}
