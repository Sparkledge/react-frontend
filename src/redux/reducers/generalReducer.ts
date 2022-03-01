import { CHANGE_GRAPHICAL_MODE } from "../types/generalTypes";
import { changeGraphicalMode, ActionType } from "../actions/generalActions";

export type InitialStateType = {
    graphicalMode: number
};

const initialState:InitialStateType = {
    graphicalMode: 0
}

const generalReducer = (state:InitialStateType=initialState, action: ActionType) : InitialStateType => {
    switch(action.type){
        case CHANGE_GRAPHICAL_MODE:
            return {
                ...state,
                graphicalMode: state.graphicalMode === 0 ? 1 : 0
            }
        default:
            return state;
    }
}

export default generalReducer;