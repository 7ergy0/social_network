import {ActionsType} from "./store";
import {profileApi} from "../api/Api";
import {Dispatch} from "@reduxjs/toolkit";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE="SET-USER-PROFILE"
const SET_STATUS_PROFILE="SET-STATUS-PROFILE"


let initialState={
        postsData: [
            {id: 1, message: "How are you", likesCount: 12},
            {id: 2, message: "It' my first post", likesCount: 34},
            {id: 3, message: "How are you?", likesCount: 32}
        ],
        newPostText: "it-kamasutra.com",
    profile:null,
    status:""
    };
export type initialStateType=typeof initialState

const profileReducer = (state:initialStateType=initialState, action: ActionsType):initialStateType=> {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state,
                postsData:[...state.postsData,newPost],
            newPostText:""};

        //-------------Рефакторинг------------------
            // let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            // let stateCopy={...state}
            // stateCopy.postsData=[...state.postsData];
            // stateCopy.postsData.push(newPost)
            // stateCopy.newPostText = ""
            //return stateCopy;

        case UPDATE_NEW_POST_TEXT:
        return {...state,
            newPostText:action.newText};

            // let stateCopy2={...state}
            // stateCopy2.newPostText = action.newText
            // return stateCopy2;
        case SET_USER_PROFILE:
            return {...state,
            profile: action.profile};
        case SET_STATUS_PROFILE:
            return {...state,
            status: action.status};

        default:
            return state
    }


}
export const addPostActionCreator = () =>({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (text: string)=>({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export const setUserProfile=(profile:null)=>({type:SET_USER_PROFILE,profile}) as const
export const setStatusProfile=(status:string)=>({type:SET_STATUS_PROFILE,status}) as const


export const defaultProfile=(userId:number)=>(dispatch:Dispatch)=>{
    profileApi.defaultUser(userId).then(data=> {
        dispatch(setUserProfile(data));
    });
};
export const getStatusProfile=(userId:number)=>(dispatch:Dispatch)=>{
    profileApi.getStatus(userId).then(data=>{
        dispatch(setStatusProfile(data))
    })
};
export const updateStatusProfile=(status:string)=>(dispatch:Dispatch)=>{
    profileApi.updateStatus(status).then(data=>{
        if( data.data.resultCode===0 ){
            dispatch(setStatusProfile(status))
        }
    })
}

export default profileReducer;