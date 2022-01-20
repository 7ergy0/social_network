import React, {ComponentType, ReactNode} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logoutProfile} from "../../redux/authReducer";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "@reduxjs/toolkit";



type mapStateToPropsType = {
    isAuth: boolean,
    login: string
}
type HeaderContainerType = mapStateToPropsType

class HeaderContainer extends React.Component<any, HeaderContainerType> {
    componentDidMount() {
       // authApi.getMyProfile().then(data => {
       //      if (data.resultCode === 0) {
       //          let { id,email, login} = data.data
       //          this.props.setAuthData(id,email,login)
       //      }
       //  })
        this.props.getAuthUserData()
    }

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

export default compose<ComponentType>(connect(mapStateToProps, {getAuthUserData,logoutProfile}))(HeaderContainer);