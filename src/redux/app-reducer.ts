import {ActionsType} from "./store";
import {Dispatch} from "@reduxjs/toolkit";
import {getAuthUserData} from "./auth-Reducer";



const INITIALIZED_SUCCESS="INITIALIZED_SUCCESS"


let initialState={
   initialized:false

};
type initialStateType=typeof initialState

export const appReducer=(state:initialStateType=initialState,action:ActionsType):initialStateType=>{
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true

            }
        default:
            return state
    }
}


export const initializedSuccess=()=>({type:INITIALIZED_SUCCESS}) as const

export const initializeApp=()=>(dispatch:Dispatch)=>{
let promise=dispatch<any>(getAuthUserData())
    promise.then(()=>{
        dispatch(initializedSuccess())
    })
};

export default appReducer;





