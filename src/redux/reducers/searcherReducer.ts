import { SET_NEW_UNI, SET_NEW_FAC } from "../types/searcherTypes";
import { ActionType } from "../actions/generalActions";

export type InitialStateType = {
    searchedUni: string,
    searchedFac: string
};

const initialState:InitialStateType = {
    searchedUni: "",
    searchedFac: ""
}

const searcherReducer = (state:InitialStateType=initialState, action: ActionType) => {
    switch(action.type){
        case SET_NEW_UNI: 
            return {
                ...state,
                searchedUni: action.supportData.newUniversity
            }
        case SET_NEW_FAC:
            return {
                ...state,
                searchedFac: action.supportData.newFaculty
            }
        default:
            return state;
    }
};

export default searcherReducer;