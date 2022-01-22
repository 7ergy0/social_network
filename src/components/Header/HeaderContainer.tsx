import React, {ComponentType, ReactNode} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutProfile} from "../../redux/auth-Reducer";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "@reduxjs/toolkit";



type mapStateToPropsType = {
    isAuth: boolean,
    login: string
}
type HeaderContainerType = mapStateToPropsType

class HeaderContainer extends React.Component<any, HeaderContainerType> {


    render():ReactNode {
        return (

            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose<ComponentType>(connect(mapStateToProps, {logoutProfile}))(HeaderContainer);