import React, {ComponentType} from "react";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "@reduxjs/toolkit";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType={

    state:RootStateType
}
type mapDispatchToPropsType={
    sendMessageAction:(addMessageBody:string)=>void

}

export type DialogsContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
        state:state

    }
};
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        sendMessageAction: (addMessageBody:string) => {
            dispatch(sendMessageActionCreator(addMessageBody))
        }
    }
}
export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);
