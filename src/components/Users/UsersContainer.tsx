import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUser, toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
// type mapDispatchToPropsType = {
//     followAction: (userId: number) => void
//     unfollowAction: (userId: number) => void
//     setUserAction: (users: UsersType[]) => void
//     setCurrentAction: (pageNumber: number) => void
//     setTotalUsersCountAction: (totalCount: number) => void
//     toggleIsFetchingAction:(isFetching:boolean)=>void
// }

export type UsersContainerType = mapStateToPropsType //& mapDispatchToPropsType

class UserContainer extends React.Component<any, UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <>
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
                   follow={this.props.follow}/>
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
const UsersContainer = connect(mapStateToProps,
    {follow,unfollow, setUser,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UserContainer);
export default UsersContainer;