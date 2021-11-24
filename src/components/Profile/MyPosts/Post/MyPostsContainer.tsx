import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../../redux/redux-store";
import { Dispatch } from "@reduxjs/toolkit";

type mapStateToPropsType={
    newPostText:string
    state:RootStateType
}
type mapDispatchToPropsType={
    addPostAction:()=>void
    updateNewPostTextAction:(text: string)=>void
}
export type MyPostsContainerType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state:RootStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        state: state

    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPostAction: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostTextAction: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;