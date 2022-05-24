import {combineReducers} from "redux";
import generalReducer from "./reducers/generalReducer";
import searcherReducer from "./reducers/searcherReducer";

const finalReducer = combineReducers({
    generalData: generalReducer,
    searcherData: searcherReducer
})

export type RootState = ReturnType<typeof finalReducer>;

export default finalReducer;