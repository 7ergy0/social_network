import {ActionsType} from "./store";


const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN-FOLLOW"
const SET_USER = "SET-USER"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

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
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true
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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {...state,
            totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UN_FOLLOW, userId}) as const
export const setUserAC = (users: UsersType[]) => ({type: SET_USER, users}) as const
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCountAC = (totalCount:number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const
export const toggleIsFetchingAC = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export default usersReducer;