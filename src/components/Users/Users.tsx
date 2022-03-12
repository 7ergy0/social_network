import React from "react";
import {UsersType} from "../../types";
import Pagination from "../../common/pagination/Pagination";
import User from "./user/User";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

function Users({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}: UsersPropsType) {

    return <div>
        <Pagination totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}/>
        {
            props.users.map((m) => <User key={m.id}
                                         user={m}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         followingInProgress={props.followingInProgress}/>)
        }


    </div>
}

export default Users;