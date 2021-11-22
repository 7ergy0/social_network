import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {RootStoreType} from "./store";





let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer
})

let store:RootStoreType=createStore(reducers)



export default store;
