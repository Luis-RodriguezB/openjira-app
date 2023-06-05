export interface ContextProps {
  sidemenuOpen: boolean;
  modalOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;

  openModal: () => void;
  closeModal: () => void;
}

export interface UIState {
  sidemenuOpen: boolean;
  modalOpen: boolean;
}
