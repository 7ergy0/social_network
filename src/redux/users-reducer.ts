import {ActionsType} from "./store";

const FOLLOW="FOLLOW"
const UN_FOLLOW="UN-FOLLOW"
const SET_USER="SET-USER"

let initialState={
        users: [
            {id: 1, followed:false, fullName: "Sergey",status:"Im are boss",location:{city:"Borisov",country:"Belarus"} },
            {id: 2, followed:true, fullName: "Olga",status:"Im are boss too",location:{city:"Borisov",country:"Belarus"} },
            {id: 3, followed:false, fullName: "Alex",status:"Im are boss too",location:{city:"Borisov",country:"Belarus"} },
        ],
    };
const usersReducer = (state=initialState, action: ActionsType)=> {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userId) {
                        return {...m, followed: true}
                    }
                    return m
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userId) {
                        return {...m, followed: false}
                    }
                    return m
                })
            }
        case SET_USER:
            return {
                ...state,
                users: [...state.users]
            }
    }
            return state;
}


export const followAC=(userId:number)=>({type:FOLLOW,userId}) as const
export const unfollowAC=(userId:number)=>({type:UN_FOLLOW,userId}) as const
export const setUserAC=(users:any)=>({type:SET_USER,users}) as const
export default usersReducer;