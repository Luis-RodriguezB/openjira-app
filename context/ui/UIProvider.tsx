import { FC } from 'react';
import { useUI } from '@/hooks';
import { UIContext } from './';

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export const UIProvider: FC<Props> = ({ children }) => {
  const { state, ...restMethods } = useUI();

  return (
    <UIContext.Provider
      value={{
        ...state,
        ...restMethods
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
