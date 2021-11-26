import React from "react";
import {connect} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {RootStateType} from "../../redux/redux-store";
import Users from "./Users";
import {followAC, setUserAC, unfollowAC} from "../../redux/users-reducer";

type mapStateToPropsType={

}
type mapDispatchToPropsType={

}

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:RootStateType) => {
    return {users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        followAction: (userId:number) => {
dispatch(followAC(userId))
        },
        unfollowAction: (userId:number) => {
dispatch(unfollowAC(userId))
        },
        setUserAction:(users:any)=>{
            dispatch(setUserAC(users))
        }
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;