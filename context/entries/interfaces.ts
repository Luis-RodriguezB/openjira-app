import { Entry, EntryStatus } from '@/interfaces';

export interface ContextProps {
  entries: Entry[];

  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackBar: boolean) => void;
  getEntryById: (id: string) => Entry | undefined;
  getEntriesByStatus: (status: EntryStatus) => Entry[];
}

export interface EntriesState {
  entries: Entry[];
}
