import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {RootStateType} from "../../redux/redux-store";

type mapStateToPropsType={
    newMessage:string
    state:RootStateType
}
type mapDispatchToPropsType={
    sendMessageAction:()=>void
    updateNewMessageBodyAction:(text: string)=>void
}

export type DialogsContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
        newMessage: state.dialogsPage.newMessageBody,
        state:state
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        sendMessageAction: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBodyAction: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))


        }
    }

}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;