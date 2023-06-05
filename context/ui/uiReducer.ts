import { UIState } from './interfaces';

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Open Modal' }
  | { type: 'UI - Close Modal' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI - Open Modal':
      return {
        ...state,
        modalOpen: true,
      };
    case 'UI - Close Modal':
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return { ...state };
  }
};
