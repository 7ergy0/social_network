import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


import {
    follow, requestUsers,
    unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrenPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../utils/users-selectors";
import {UsersType} from "../../types";





type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
    followingInProgress:any

}
type OwnPropsType={
    pageTitle:string
}
type UserContainerType={
    pageTitle:string
    getUsers:(currentPage:number,pageSize:number)=>void
    unfollow: (id: number) => void
    follow: (id: number) => void
}
// type mapDispatchToPropsType = {
//     followAction: (userId: number) => void
//     unfollowAction: (userId: number) => void
//     setUserAction: (users: UsersType[]) => void
//     setCurrentAction: (pageNumber: number) => void
//     setTotalUsersCountAction: (totalCount: number) => void
//     toggleIsFetchingAction:(isFetching:boolean)=>void
// }

export type UsersContainerTypes = MapStateToPropsType & UserContainerType & OwnPropsType//& mapDispatchToPropsType

class UserContainer extends React.Component<UsersContainerTypes> {

    componentDidMount() {
       //  this.props.toggleIsFetching(true)
       // usersApi.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
       //      this.props.toggleIsFetching(false)
       //      this.props.setUser(data.items)
       //      this.props.setTotalUsersCount(data.totalCount)
       //  })
        const {currentPage,pageSize}=this.props
        this.props.getUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber);
        const {pageSize}=this.props
       this.props.getUsers(pageNumber,pageSize);
        //     this.props.setUser(data.items)
        //     this.props.toggleIsFetching(false)
        // })
    }

    render() {

        return <>
            <h2>{this.props.pageTitle}</h2>
            {
                this.props.isFetching?
                   <div>
                       <Preloader/>
                   </div>
                    :null
            }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   />
        </>

    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        // users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
        // isFetching:state.usersPage.isFetching,
        // followingInProgress:state.usersPage.followingInProgress

        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrenPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)

    }

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         followAction: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollowAction: (userId: number) => {
//             dispatch(unfollow(userId))
//         },
//         setUserAction: (users: UsersType[]) => {
//             dispatch(setUser(users))
//         },
//         setCurrentAction: (pageNumber: number) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCountAction: (totalCount: number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetchingAction: (isFetching:boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }

}

export default compose<ComponentType>(connect<MapStateToPropsType,{},OwnPropsType,RootStateType>(mapStateToProps,
    {follow,unfollow,getUsers: requestUsers}))(UserContainer);