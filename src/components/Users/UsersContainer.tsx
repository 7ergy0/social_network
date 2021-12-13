import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {RootStateType} from "../../redux/redux-store";
import preloader from "../../assets/images/preloader.gif"

import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC, toggleIsFetchingAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
type mapDispatchToPropsType = {
    followAction: (userId: number) => void
    unfollowAction: (userId: number) => void
    setUserAction: (users: UsersType[]) => void
    setCurrentAction: (pageNumber: number) => void
    setTotalUsersCountAction: (totalCount: number) => void
    toggleIsFetchingAction:(isFetching:boolean)=>void
}

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

class UserContainer extends React.Component<any, UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetchingAction(true)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetchingAction(false)
            this.props.setUserAction(response.data.items)
            this.props.setTotalUsersCountAction(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetchingAction(true)
        this.props.setCurrentAction(pageNumber);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUserAction(response.data.items)
            this.props.toggleIsFetchingAction(false)
        })
    }

    render() {
        return <>
            {
                this.props.isFetching?
                    <div >
                        <img src={preloader} style={{width:"50px", height:"50px"}} />
                    </div>
                    :null
            }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollowAction={this.props.unfollowAction}
                   followAction={this.props.followAction}/>
        </>

    }
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching

    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followAction: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowAction: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUserAction: (users: UsersType[]) => {
            dispatch(setUserAC(users))
        },
        setCurrentAction: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCountAction: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetchingAction: (isFetching:boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);
export default UsersContainer;