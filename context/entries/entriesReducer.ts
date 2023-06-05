import { EntriesState } from './interfaces';

type EntriesActionType = { type: '[Entries] - ActionName' }

export const entriesReducer = (state: EntriesState, action: any): EntriesState => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
