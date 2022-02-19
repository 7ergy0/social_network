import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";
import {ActionsType} from "./store";






export const rootReducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})

export type RootStateType=ReturnType<typeof rootReducers>

export type RootThunkTypes<ReturnType=void>=ThunkAction<ReturnType, RootStateType, unknown, ActionsType>

let store=createStore(rootReducers,applyMiddleware(thunkMiddleware));



export default store;

// @ts-ignore
window.store=store