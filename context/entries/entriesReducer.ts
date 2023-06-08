import { Entry } from '@/interfaces';
import { EntriesState } from './interfaces';

type EntryActionType =
  | { type: '[Entry] - Add-Entry'; payload: Entry }
  | { type: '[Entry] - Update-Entry'; payload: Entry }
  | { type: '[Entry] - Refresh-Data'; payload: Entry[] };

export const entriesReducer = (state: EntriesState, { type, payload }: EntryActionType): EntriesState => {
  switch (type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, payload],
      };
    case '[Entry] - Update-Entry':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === payload._id) {
            entry.status = payload.status;
            entry.description = payload.description;
          }
          return entry;
        }),
      };
    case '[Entry] - Refresh-Data':
      return {
        ...state,
        entries: [...payload]
      };

    default:
      return { ...state };
  }
};


const getUniquesEntry = (entry: Entry, initialEntries: Entry[]) => {
  initialEntries.forEach(e => {
    if (e._id !== entry._id) return true;

    return false;
  });
}