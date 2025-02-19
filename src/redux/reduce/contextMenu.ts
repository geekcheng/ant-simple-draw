import * as types from '@/redux/constants/actionType';
import { contextMenuActionMerage } from '../action/contextMenu';

export interface showContextMenuDataType<T = number> {
  top: T;
  left: T;
}
export interface contextMenuInitialStateType<K = boolean> extends showContextMenuDataType {
  menuShow: K;
}
const initialState: contextMenuInitialStateType = {
  top: 0,
  left: 0,
  menuShow: false,
};

export default (
  state = initialState,
  action: contextMenuActionMerage,
): contextMenuInitialStateType => {
  switch (action.type) {
    case types.showContextMenu:
      const showData = Object.assign({}, action.data, { menuShow: true });
      return { ...state, ...showData };
    case types.hideContextMenu:
      return { ...state, menuShow: false };
    default:
      return state;
  }
};
