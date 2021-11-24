import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";






export const rootReducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer
})

export type RootStateType=ReturnType<typeof rootReducers>


let store=createStore(rootReducers)



export default store;
