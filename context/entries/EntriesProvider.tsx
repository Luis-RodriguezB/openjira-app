import { FC, useMemo } from 'react';
import { EntriesContext } from './';
import { useEntryProvider } from '@/hooks';

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const { state, ...restMethods } = useEntryProvider();
  const entryProviderObj = useMemo(() => ({ ...state, ...restMethods}), [state, restMethods])

  return (
    <EntriesContext.Provider
      value={entryProviderObj}
    >
      {children}
    </EntriesContext.Provider>
  );
};
