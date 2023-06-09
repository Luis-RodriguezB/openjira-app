import { useReducer, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { EntriesState, entriesReducer } from '@/context/entries';
import { Entry, EntryStatus } from '@/interfaces';
import { entriesApi } from '@/apis';

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const useEntryProvider = () => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>('/entries', {
        description,
      });
      dispatch({ type: '[Entry] - Add-Entry', payload: data });

      enqueueSnackbar('Entrada agregada', {
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackBar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`entries/${_id}`, {
        description: description,
        status: status,
      });
      dispatch({
        type: '[Entry] - Update-Entry',
        payload: data,
      });

      if (showSnackBar) {
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEntryById = (id: string) => {
    return state.entries.find((entry) => entry._id === id);
  };

  const getEntriesByStatus = (status: EntryStatus) => {
    return state.entries.filter((entry) => entry.status === status);
  };

  const refreshEntries = async () => {
    try {
      const { data } = await entriesApi.get<Entry[]>('/entries');
      dispatch({ type: '[Entry] - Refresh-Data', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return {
    state,

    //Methods
    addNewEntry,
    updateEntry,
    getEntryById,
    getEntriesByStatus,
  };
};
