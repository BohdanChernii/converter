import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {courenciesReducer} from "../slices/courency.slice";

const rootReducer = combineReducers({
  courenciesReducer
})

const setUpStore = () => configureStore({
  reducer: rootReducer
})

export {setUpStore}

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setUpStore>
type AppDispatch = AppStore['dispatch']

export type {
  RootState,
  AppStore,
  AppDispatch
}