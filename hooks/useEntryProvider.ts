import { useReducer } from 'react';
import { EntriesState, entriesReducer } from '@/context/entries';
import { Entry, EntryStatus } from '@/interfaces';

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: crypto.randomUUID(),
      description: 'Elit minim tempor consectetur duis officia culpa ea.',
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      _id: crypto.randomUUID(),
      description: 'Occaecat nostrud ut id esse do nulla id Lorem sit.',
      status: EntryStatus.INPROGRESS,
      createdAt: Date.now() - 100000,
      updatedAt: Date.now() - 100000,
    },
    {
      _id: crypto.randomUUID(),
      description:
        'Veniam ea dolor in consequat officia pariatur proident dolor Lorem veniam commodo velit elit.',
      status: EntryStatus.FINISHED,
      createdAt: Date.now() - 150000,
      updatedAt: Date.now() - 150000,
    },
  ],
};

export const useEntryProvider = () => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
        _id: crypto.randomUUID(),
        description,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: EntryStatus.PENDING
    }

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  }

  const updateEntry = (entry: Entry) => {
    dispatch({
      type: '[Entry] - Update-Entry',
      payload: entry
    });
  }

  const getEntryById = (id: string) => {
    return state.entries.find(entry => entry._id === id);
  }

  const getEntriesByStatus = (status: EntryStatus) => {
    return state.entries.filter(entry => entry.status === status);
  }


  return {
    state,

    //Methods
    addNewEntry,
    updateEntry,
    getEntryById,
    getEntriesByStatus,
  };
};
