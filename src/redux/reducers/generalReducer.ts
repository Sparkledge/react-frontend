import { CHANGE_GRAPHICAL_MODE, SET_NEW_TOKEN } from "../types/generalTypes";
import { ActionType } from "../actions/generalActions";

export type InitialStateType = {
  graphicalMode: number,
  currentToken: string
};

const initialState:InitialStateType = {
  graphicalMode: 1,
  currentToken: "",
};

const generalReducer = (
  state:InitialStateType = initialState, 
  action: ActionType,
) : InitialStateType => {
  switch (action.type) {
    case CHANGE_GRAPHICAL_MODE:
      return {
        ...state,
        graphicalMode: state.graphicalMode === 0 ? 1 : 0,
      };
    case SET_NEW_TOKEN:
      return {
        ...state,
        currentToken: action.supportData.newToken,
      };
    default:
      return state;
  }
};

export default generalReducer;
