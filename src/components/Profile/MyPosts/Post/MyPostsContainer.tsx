import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../../redux/redux-store";
import {compose, Dispatch} from "@reduxjs/toolkit";

type mapStateToPropsType={
   // newPostText:string
    state:RootStateType
}
type mapDispatchToPropsType={
    addPostAction:(addMyPost:string)=>void
    // updateNewPostTextAction:(text: string)=>void
}
export type MyPostsContainerType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state:RootStateType) => {
    return {
        state: state
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPostAction: (addMyPost:string) => {
            dispatch(addPostActionCreator(addMyPost))
        },
        // updateNewPostTextAction: (text: string) => {
        //     dispatch(updateNewPostTextActionCreator(text))
        // }

    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);