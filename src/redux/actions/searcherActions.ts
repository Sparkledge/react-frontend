import { SET_NEW_UNI, SET_NEW_FAC } from "../types/searcherTypes";

export const setNewUni = (newUni: string) => {
    return {
        type: SET_NEW_UNI,
        supportData: {
            newUniversity: newUni
        }
    }
}

export const setNewFac = (newFac: string) => {
    return {
        type: SET_NEW_FAC,
        supportData: {
            newFaculty: newFac
        }
    }
}