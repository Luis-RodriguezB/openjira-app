export interface ContextProps {
  sidemenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export interface UIState {
  sidemenuOpen: boolean;
}
