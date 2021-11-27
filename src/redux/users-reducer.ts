import {ActionsType} from "./store";

const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN-FOLLOW"
const SET_USER = "SET-USER"

export type UsersType = {
    id: number
    photo: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType

}
type UserLocationType = {
    city: string,
    country: string
}

export type InitialStateType = typeof initialState

let initialState = {
    users: [] as UsersType[],
};
const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
                users: [...state.users,...action.users]
            }
    }
    return state;
}


export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UN_FOLLOW, userId}) as const
export const setUserAC = (users: UsersType[]) => ({type: SET_USER, users}) as const
export default usersReducer;