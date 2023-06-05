import { useReducer } from 'react';
import { UIState, uiReducer } from '@/context/ui';

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  modalOpen: false,
  isDragging: false,
};

export const useUIProvider = () => {
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

  const startDragging = () => {
    dispatch({
      type: 'UI - Start Dragging',
    });
  };

  const endDragging = () => {
    dispatch({
      type: 'UI - End Dragging',
    });
  };

  return {
    state,

    openSideMenu,
    closeSideMenu,
    openModal,
    closeModal,
    startDragging,
    endDragging,
  };
};
