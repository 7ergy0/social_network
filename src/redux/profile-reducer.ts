import {ActionsType} from "./store";
import {profileApi, ResultCode} from "../api/Api";
import {PhotosType, PostType, ProfileType} from "../types";
import {RootThunkTypes} from "./redux-store";
const ADD_POST = "profile/ADD-POST"
const DELETE_POST = "profile/DELETE-POST"
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE="profile/SET-USER-PROFILE"
const SET_STATUS_PROFILE="profile/SET-STATUS-PROFILE"
const SET_PHOTO_PROFILE="profile/SET-PHOTO-PROFILE"


let initialState={
        postsData: [
            {id: 1, message: "How are you", likesCount: 12},
            {id: 2, message: "It' my first post", likesCount: 34},
            {id: 3, message: "How are you?", likesCount: 32}
        ] as Array<PostType>,
    profile:null as ProfileType|null,
    status:"",
    image:null as PhotosType|null
    };
export type initialStateType=typeof initialState

const profileReducer = (state:initialStateType=initialState, action: ActionsType):initialStateType=> {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: action.addMyPost, likesCount: 0}
            return {...state,
                postsData:[...state.postsData,newPost],};
        case DELETE_POST:
            return {...state,postsData: state.postsData.filter(f=>f.id!==action.postId)}

        //-------------Рефакторинг------------------
            // let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            // let stateCopy={...state}
            // stateCopy.postsData=[...state.postsData];
            // stateCopy.postsData.push(newPost)
            // stateCopy.newPostText = ""
            //return stateCopy;

        // case UPDATE_NEW_POST_TEXT:
        // return {...state,
        //     newPostText:action.newText};

            // let stateCopy2={...state}
            // stateCopy2.newPostText = action.newText
            // return stateCopy2;
        case SET_USER_PROFILE:
            return {...state,
            profile: action.profile};
        case SET_STATUS_PROFILE:
            return {...state,
            status: action.status};
        case SET_PHOTO_PROFILE:
            return {...state,
            image:action.image}

        default:
            return state
    }


}
export const addPostActionCreator = (addMyPost:string) =>({type: ADD_POST,addMyPost}) as const
export const deletePostActionCreator = (postId:number) =>({type: DELETE_POST,postId}) as const
//export const updateNewPostTextActionCreator = (text: string)=>({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export const setUserProfile=(profile:ProfileType)=>({type:SET_USER_PROFILE,profile}) as const
export const setStatusProfile=(status:string)=>({type:SET_STATUS_PROFILE,status}) as const
export const setPhotoProfile=(image:any)=>({type:SET_PHOTO_PROFILE,image}) as const


export const defaultProfile=(userId:number):RootThunkTypes=>async (dispatch)=>{
    let data=await profileApi.defaultUser(userId);
        dispatch(setUserProfile(data));
};
export const getStatusProfile=(userId:number):RootThunkTypes=>async (dispatch)=>{
    let data= await profileApi.getStatus(userId);
        dispatch(setStatusProfile(data))
};
export const updateStatusProfile=(status:string):RootThunkTypes=>async (dispatch)=>{
    let data=await profileApi.updateStatus(status);
        if( data.resultCode===ResultCode.success ){
            dispatch(setStatusProfile(status))
        }
};
export const getPhotoProfile=(image:any):RootThunkTypes=>async (dispatch)=>{
    let data=await profileApi.setPhoto(image);
        if( data.resultCode===ResultCode.success ){
            dispatch(setPhotoProfile(image))
            dispatch(setUserProfile(data))
        }
};


export default profileReducer;