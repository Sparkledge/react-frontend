import { CHANGE_GRAPHICAL_MODE } from "../types/generalTypes";

export type ActionType = {
    type: string,
    supportData?: any
}

export const changeGraphicalMode = () => {
    return {
        type: CHANGE_GRAPHICAL_MODE
    }
}