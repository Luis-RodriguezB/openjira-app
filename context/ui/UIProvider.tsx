import { FC, useMemo } from 'react';
import { useUIProvider } from '@/hooks';
import { UIContext } from './';

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export const UIProvider: FC<Props> = ({ children }) => {
  const { state, ...restMethods } = useUIProvider();
  const uiProviderObj = useMemo(() => ({...state, ...restMethods}), [state, restMethods]);

  return (
    <UIContext.Provider
      value={uiProviderObj}
    >
      {children}
    </UIContext.Provider>
  );
};
