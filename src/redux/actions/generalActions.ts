import { CHANGE_GRAPHICAL_MODE, SET_NEW_TOKEN, TOGGLE_OPENING_NOTIFICATIONS } from "../types/generalTypes";

export type ActionType = {
  type: string,
  supportData?: any
};

export const changeGraphicalMode = () => ({
  type: CHANGE_GRAPHICAL_MODE,
});

export const setNewToken = (tokenToPass:string) => ({
  type: SET_NEW_TOKEN,
  supportData: {
    newToken: tokenToPass,
  },
});

export const toggleOpeningNotifications = () => ({
  type: TOGGLE_OPENING_NOTIFICATIONS,
});
