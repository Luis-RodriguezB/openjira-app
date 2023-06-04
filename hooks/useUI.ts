import { useReducer } from 'react';
import { UIState, uiReducer } from '@/context/ui';

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};


export const useUI = () => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({
      type: 'UI - Open Sidebar',
    });
  };

  const closeSideMenu = () => {
    dispatch({
      type: 'UI - Close Sidebar',
    });
  };

  return {
    ...state,
    state,

    openSideMenu,
    closeSideMenu,
  };
};
