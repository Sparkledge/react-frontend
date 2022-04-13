import { CHANGE_GRAPHICAL_MODE, SET_NEW_TOKEN } from "../types/generalTypes";

export type ActionType = {
    type: string,
    supportData?: any
}

export const changeGraphicalMode = () => {
    return {
        type: CHANGE_GRAPHICAL_MODE
    }
}

export const setNewToken = (tokenToPass:string) => {
    return{
        type: SET_NEW_TOKEN,
        supportData: {
            newToken: tokenToPass
        }
    }
}