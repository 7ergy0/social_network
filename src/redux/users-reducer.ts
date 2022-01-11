import {ActionsType} from "./store";
import {followApi, usersApi} from "../api/Api";
import {Dispatch} from "@reduxjs/toolkit";


const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN-FOLLOW"
const SET_USER = "SET-USER"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING"

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
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[],
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
            };
        case SET_USER:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
}


export const followSuccess = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowSuccess = (userId: number) => ({type: UN_FOLLOW, userId}) as const
export const setUser = (users: UsersType[]) => ({type: SET_USER, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleIsFollowing = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFetching,
    userId
}) as const

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUser(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    })
};
export const unfollow = (userId:number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true,userId));
    followApi.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowing(false,userId));
    })
};
export const follow = (userId:number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true,userId));
    followApi.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowing(false,userId));
    })
};
export default usersReducer;