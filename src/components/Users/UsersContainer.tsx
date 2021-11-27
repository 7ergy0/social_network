import React from "react";
import {connect} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {RootStateType} from "../../redux/redux-store";
import Users from "./Users";
import {followAC, setUserAC, unfollowAC, UsersType} from "../../redux/users-reducer";

type mapStateToPropsType={
users:UsersType[]
}
type mapDispatchToPropsType={
    followAction:(userId:number)=>void
    unfollowAction:(userId:number)=>void
    setUserAction:(users:UsersType[])=>void
}

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        followAction: (userId:number) => {
dispatch(followAC(userId))
        },
        unfollowAction: (userId:number) => {
dispatch(unfollowAC(userId))
        },
        setUserAction:(users:UsersType[])=>{
            dispatch(setUserAC(users))
        }
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;