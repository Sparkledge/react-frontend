import {combineReducers} from "redux";
import generalReducer from "./reducers/generalReducer";

const finalReducer = combineReducers({
    generalData: generalReducer
})

export type RootState = ReturnType<typeof finalReducer>;

export default finalReducer;