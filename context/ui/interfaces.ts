export interface ContextProps {
  sidemenuOpen: boolean;
  modalOpen: boolean;
  isDragging: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;

  openModal: () => void;
  closeModal: () => void;

  startDragging: () => void;
  endDragging: () => void;
}

export interface UIState {
  sidemenuOpen: boolean;
  modalOpen: boolean;
  isDragging: boolean;
}
