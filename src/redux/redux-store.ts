import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";






export const rootReducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export type RootStateType=ReturnType<typeof rootReducers>


let store=createStore(rootReducers,applyMiddleware(thunkMiddleware));



export default store;
