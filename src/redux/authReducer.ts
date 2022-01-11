import {ActionsType} from "./store";
import {Dispatch} from "@reduxjs/toolkit";
import {authApi} from "../api/Api";


const SET_AUTH_DATA="SET_AUTH_DATA"


let initialState={
    userId:null,
    email:null,
    login:null,
    isAuth:false

};
type initialStateType=typeof initialState

const authReducer=(state:initialStateType=initialState,action:ActionsType):initialStateType=>{
    switch (action.type) {
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthData=(userId:null,email:null,login:null)=>({type:SET_AUTH_DATA,data:{userId,email,login}}) as const

export const getAuthUserData=()=>(dispatch:Dispatch)=>{
    authApi.getMyProfile().then(data => {
        if (data.resultCode === 0) {
            let { id,email, login} = data.data
            dispatch(setAuthData(id,email,login));
        }
    })
}
export default authReducer;





