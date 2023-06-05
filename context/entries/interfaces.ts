import { Entry, EntryStatus } from '@/interfaces';

export interface ContextProps {
  entries: Entry[];

  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
  getEntryById: (id: string) => Entry;
  getEntriesByStatus: (status: EntryStatus) => Entry[];
}

export interface EntriesState {
  entries: Entry[];
}
