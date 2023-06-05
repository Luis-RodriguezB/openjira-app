import { useReducer } from 'react';
import { UIState, uiReducer } from '@/context/ui';

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  modalOpen: false,
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
  
  const openModal = () => {
    dispatch({
      type: 'UI - Open Modal',
    });
  };

  const closeModal = () => {
    dispatch({
      type: 'UI - Close Modal',
    });
  };

  return {
    state,

    openSideMenu,
    closeSideMenu,
    openModal,
    closeModal
  };
};
