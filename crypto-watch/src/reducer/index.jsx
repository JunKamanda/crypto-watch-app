import { combineReducers } from "@reduxjs/toolkit";
import stableReducer from "./stable.reducer.jsx";
import listReducer from "./list.reducer.jsx";

export default combineReducers({
    stableReducer,
    listReducer
})