import { createStore } from "redux";
import finalReducer from "./mainReducer";

const store = createStore(finalReducer);

export default store;
