import {ActionsType} from "./store";
import {followApi, usersApi} from "../api/Api";
import {Dispatch} from "@reduxjs/toolkit";
import {UsersType} from "../types";
import {utilsFunction} from "../utils/object-helpers";



const FOLLOW = "user/FOLLOW"
const UN_FOLLOW = "user/UN-FOLLOW"
const SET_USER = "user/SET-USER"
const SET_CURRENT_PAGE = "user/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "user/SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "user/TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING = "user/TOGGLE-IS-FOLLOWING"




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
                users: utilsFunction(state.users,"id",action.userId,{followed:true})
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: utilsFunction(state.users,"id",action.userId,{followed:false})
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

export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data=await usersApi.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUser(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
};
const followUnfollowFlow=async (userId:number,dispatch:Dispatch,methodApi:any,actionCreator:any)=>{
    dispatch(toggleIsFollowing(true,userId));
    let data=await methodApi(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowing(false,userId));
}


export const unfollow = (userId:number) => async (dispatch: Dispatch) => {
    // let methodApi=followApi.unfollowUser.bind(followApi)
    // let actionCreator=unfollowSuccess;
    followUnfollowFlow(userId,dispatch,followApi.unfollowUser.bind(followApi),unfollowSuccess)
};

export const follow = (userId:number) => async (dispatch: Dispatch) => {

    followUnfollowFlow(userId,dispatch,followApi.followUser.bind(followApi),followSuccess)
};
export default usersReducer;