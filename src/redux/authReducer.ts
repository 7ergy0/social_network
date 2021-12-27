import {ActionsType} from "./store";


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


export const setAuthData=(userId:null,email:null,login:null,isAuth:false)=>({type:SET_AUTH_DATA,data:{userId,email,login,isAuth}}) as const

export default authReducer;





